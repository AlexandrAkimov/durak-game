<script>
    import { createEventDispatcher } from "svelte"
    import { byStep } from "../store";
    const dispatch = createEventDispatcher()
    export let hisBattleCards = [];
</script>
<div class="actions">
    {#if $byStep}
        <button on:click={() => dispatch('take', hisBattleCards)}>Беру</button>
    {/if}
    {#if !$byStep && hisBattleCards.length}
        <button on:click={() => dispatch('bito', true)}>Бито</button>
    {/if}
</div>
<style>
    .actions {
        width: 100%;
        display: flex;
        justify-content: center;
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
    
</style>