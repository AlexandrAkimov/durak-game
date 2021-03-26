<script>
  import { createEventDispatcher } from "svelte";
  import { byStep } from "../store";
  const dispatch = createEventDispatcher();
  export let hisBattleCards = [];
</script>

<div class="actions">
  <div class="big">
    {#if $byStep}
      <button on:click={() => dispatch("take", hisBattleCards)}>Беру</button>
    {/if}
    {#if !$byStep && hisBattleCards.length}
      <button on:click={() => dispatch("bito", true)}>Бито</button>
    {/if}
  </div>
  <div class="small">
    {#if $byStep}
      <button class="take" on:click={() => dispatch("take", hisBattleCards)}>Беру</button>
    {/if}
    {#if !$byStep && hisBattleCards.length}
      <button class="bito" on:click={() => dispatch("bito", true)}>Бито</button>
    {/if}
  </div>

</div>

<style>
  .actions {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .big {
      display: block;
  }
  button {
    border: none;
    cursor: pointer;
    outline: none;
    margin: 5px;
    border: 2px solid oldlace;
    border-radius: 5px;
    color: oldlace;
    background-color: transparent;
    width: 150px;
    height: 35px;
  }
  .small {
      display: none;
  }
  @media (max-width: 400px) {
    .big {
      display: none;
    }
    .small {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: 10px;
      bottom: 10px;
    }
    .take,.bito {
        border: none;
        width: 50px;
        height: 50px;
        color: oldlace;
        background-color: royalblue;
        opacity: .7;
        border-radius: 50%;
    }
  }
</style>
