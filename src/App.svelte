<script>
  import He from "./page-elements/He.svelte";
  import Me from "./page-elements/Me.svelte";
  import BattleField from "./page-elements/BattleField.svelte";
  import Bank from "./page-elements/Bank.svelte";
  import Actions from "./page-elements/Actions.svelte";
  import { cards } from "./config";
  import { addCard } from "./utils"
  import { hisCards, meCards, bankCards, step, kozyr, byStep } from "./store";
  import Modal from "./page-elements/Modal.svelte";
  import Snackbar from "./page-elements/Snackbar.svelte";
  import { setContext } from "svelte";

  let end = false;
  let loser = false;
  let toMyBattle = [];
  let toHisBattle = [];
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  function start() {
    bankCards.set(shuffle(cards));
    hisCards.set($bankCards.slice(-6));
    meCards.set($bankCards.slice(24, 30));
    bankCards.set($bankCards.slice(0, 24));
    kozyr.set($bankCards[0].type);
    byStep.set(false)
    step.set(false)
    toHisBattle = []
  }
  start()


  const myStep = ({ detail }) => {
      toMyBattle = [...toMyBattle, detail];
      console.log(detail);
      meCards.set($meCards.filter((c) => !(detail.value === c.value && detail.type === c.type)));
      console.log($meCards.length);
      step.set(true);
      if (!$meCards.length && !bankCards.length) {
        end = true; loser = false;
      }
  };
  const hisStep = ({ detail }) => {
      toHisBattle = [...toHisBattle, detail];
      hisCards.set($hisCards.filter((c) => !(detail.value === c.value && detail.type === c.type)));
      step.set(false);
      console.log('TO HIS BATTLE', toHisBattle);
  };
  const handleTakeHis = ({ detail }) => {
    hisCards.set(detail);
    addCard($meCards, $bankCards, meCards, bankCards)
    step.set(false);
    toMyBattle = [];
    toHisBattle = [];
    byStep.set(false);
  };
  const handleTakeMe = ({ detail }) => {
    meCards.set([...$meCards, ...hisBattleCards, ...myBattleCards])
    toMyBattle = [];
    toHisBattle = [];
    addCard($hisCards, $bankCards, hisCards, bankCards)
    step.set(false);
    byStep.set(false);
    setTimeout(() => {
      step.set(true);
      byStep.set(true);
    }, 250);
    if (!$hisCards.length && !bankCards.length) {
      end = true; loser = true
    }
    
  }
  const handleBito = ({detail}) => {
    toMyBattle = []; toHisBattle = [];
    addCard($meCards, $bankCards, meCards, bankCards)
    addCard($hisCards, $bankCards, hisCards, bankCards)
    console.log('bankCards', $bankCards);
    console.log($step);
    byStep.set(true);
    step.set(true);
  }
  const changeStep = () => {
    toMyBattle = []; toHisBattle = [];
    addCard($meCards, $bankCards, meCards, bankCards)
    addCard($hisCards, $bankCards, hisCards, bankCards)
    step.set(false);
    byStep.set(false);
  }
  let notificationTimeout = null;
  const notificationHandler = (type) => (message) => {
    if (notificationTimeout) {
      clearTimeout(notificationTimeout);
    }
    notification = { type, message };
    notificationTimeout = setTimeout(() => {
      notification = null;
    }, 2500);
  };
  let notification = null;
  setContext("notifications", {
    info: notificationHandler("info"),
    error: notificationHandler("error"),
    warn: notificationHandler("warn"),
    success: notificationHandler("success"),
    hide: () => {
      notification = null;
    },
  });
  $: myBattleCards = toMyBattle;
  $: hisBattleCards = toHisBattle;
  $: if(!end) {

    start()
  }
</script>

<div class="body">
  <He
    me={$byStep}
    cards={$hisCards}
    bind:step={$step}
    bind:attackCards={myBattleCards}
    attackCard={myBattleCards[myBattleCards.length - 1]}
    meAttackCards={hisBattleCards}
    on:hisstep={hisStep}
    kozyr={$kozyr}
    on:take={handleTakeHis}
    on:changeStep={changeStep}
  />
  <div class="battle-container">
    <BattleField {myBattleCards} {hisBattleCards} />
    <Bank firstCard={$bankCards[0]} bank={$bankCards}/>
  </div>

  <Me 
    me={$byStep}
    kozyr={$kozyr}
    attackCards={hisBattleCards}
    attackCard={hisBattleCards[hisBattleCards.length - 1]}
    cards={$meCards} 
    {myBattleCards}
    on:mystep={myStep} 
    bind:step={$step}
  />
  <Actions bind:hisBattleCards bind:step={$step} on:bito={handleBito} on:take={handleTakeMe}/>
</div>
{#if end}
  <Modal bind:end {loser}/>
{/if}
<div class="relative">
  {#if notification}
    <Snackbar
      on:close="{() => {
        notification = null;
      }}"
      type="{notification.type}"
    >
      {notification.message}
    </Snackbar>
  {/if}
</div>
<style global>
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    background-image: url("/sukno.jpg");
    background-size: cover;
  }
  .battle-container {
    display: flex;
    justify-content: space-evenly;
  }
</style>
