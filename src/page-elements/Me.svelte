<script>
  import { createEventDispatcher, getContext } from "svelte";

  export let cards = [];
  export let me = false;
  export let attackCards = [];
  export let myBattleCards = [];
  export let attackCard = null;
  export let step = true;
  export let kozyr = "";
  const dispatch = createEventDispatcher();
  const notifications = getContext("notifications");
  const sort = (arr) => {
    const sortType = arr.sort((a, b) => a.type.localeCompare(b.type));
    const kos = sortType.filter(c => c.type === kozyr)
    const nokos = sortType.filter(c => c.type !== kozyr)
    return [...nokos, ...kos]
  }
  const handleSelect = (card) => {
    if (attackCard && me) {
      if (card.type === kozyr) {
        if (attackCard.type === kozyr && attackCard.value > card.value) {
          notifications.error('У него старшая козырная')
          return
        }
      } else {
        if (attackCard.type !== card.type || attackCard.value > card.value) {
          notifications.error('У него карта сильнее')
          return;
        }
      }
    } else {
      if (attackCards[0] == null) {
        attackCards = []
        myBattleCards = []
      }
      if (![...myBattleCards, ...attackCards].some((c) => c.value === card.value) && myBattleCards.length) {
        notifications.error('Карты с таким рангом нет на поле битвы!')
        return;
      }
    }
    step = true;
    dispatch("mystep", card);
  };
</script>

<div class="container">
  <div class="hint">
    <h4>{!me ? 'Ходи!' : 'Отбивайся!'}</h4>
  </div>
  <div class="cards">
    {#each sort(cards) as card, i}
      <div on:click={() => handleSelect(card)}>
        <img src={card.img} alt={cards.type + i} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    padding: 1rem;
  }
  .hint {
    display: flex;
    justify-content: center;
    width: 100%;
    color: oldlace;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    border-radius: 4px;
  }
</style>
