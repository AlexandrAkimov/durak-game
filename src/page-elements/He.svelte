<script>
  import { createEventDispatcher, getContext } from "svelte";
  export let cards = [];
  export let kozyr = '';
  export let step = false;
  export let attackCard = null;
  export let attackCards = [];
  export let meAttackCards = [];
  export let me = false;

  const dispatch = createEventDispatcher();
  const notifications = getContext('notifications')
  let hisCardsInKol = [];
  $: if (step) {
        if (attackCard && !me) {
          const powerCards = cards.filter((c) => (
            (c.type === attackCard.type || (c.type === kozyr && attackCard.type !== kozyr)) 
            && (c.value > attackCard.value) || c.type === kozyr && attackCard.type !== kozyr));
          if (powerCards.length) {
            hisCardsInKol = powerCards;
            let min;
            if (powerCards.length > 1) {
              
              min = powerCards.map(c => c.value).reduce((a, b) => Math.min(a, b));
            } else {
              min = powerCards[0].value;
            }
            let card;
            const nokozyr = powerCards.filter(c => c.type !== kozyr);
            if (nokozyr.length) {
              card = nokozyr.sort((a, b) => a.value > b.value)[0]
            } else {
              card = powerCards.find((c) => c.value === min);
            }
            
            step = false;
            dispatch("hisstep", card);
          } else {
              step = false;
              dispatch('take', {
                all: [...cards, ...attackCards, ...hisCardsInKol],
                battle: [...attackCards, ...hisCardsInKol]
              })
              notifications.info('Он взял!!! Ходи!')
          }
        } else {
            
            let possibleCards = cards.filter((c, i) => {
              return [...meAttackCards, ...attackCards].some((ca) => c.value === ca.value)
            })
            if (possibleCards.length || !attackCards.length) {
              if(!attackCards.length) possibleCards = cards
              const simpleCards = possibleCards.filter(c => c.type !== kozyr);
              let lowerCard
              if (simpleCards.length) {

                lowerCard = simpleCards.sort((a, b) => a.value - b.value)[0]

              } else {
                lowerCard = possibleCards.sort((a, b) => a.value - b.value)[0]
              }
              step = false;
              me = true;
              dispatch("hisstep", lowerCard);
            } else {
              step = false;
              dispatch('changeStep');
              notifications.info('Ты отбился, ходи!')
            }
            
        }
  }
</script>

<div class="container">
  <div class="label"><h4>Противник</h4></div>
  <div class="cards big">
    {#each cards as card, i}
      <img src="cards/rubashka.bmp" alt={cards.type + i} />
    {/each}
  </div>
  <div class="cards small">
    <div class="rubashka"><span style="color: green;font-weight:bold;font-size:30px">{cards.length}</span></div>
  </div>
</div>

<style>
  .label {
    display: flex;
    width: 100%;
    color: oldlace;
    justify-content: center;
  }
  .container {
    padding: 1rem;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .small {
    display: none;
    justify-content: center;
    align-items: center;
  }
  .rubashka {
    background-image: url('/cards/rubashka.bmp');
    width: 70px;
    height: 140px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 4px;
  }
  @media (max-width: 400px) {
    .small {
      display: flex;

    }
    .big {
      display: none;
    }
  }
</style>
