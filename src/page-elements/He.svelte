<script>
  import { createEventDispatcher, getContext } from "svelte";
  export let cards = [];
  export let kozyr = '';
  export let step = false;
  export let attackCard = null;
  export let attackCards = [];
  export let meAttackCards = [];
  export let me = false

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
              dispatch('take', [...cards, ...attackCards, ...hisCardsInKol])
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
  <div class="cards">
    {#each cards as card, i}
      <img src="cards/rubashka.bmp" alt={cards.type + i} />
    {/each}
  </div>
</div>

<style>
  .container {
    padding: 1rem;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
