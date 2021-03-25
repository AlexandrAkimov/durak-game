<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let loser = false
</script>
<div class="modal">
    <h3 class:loser><span>{!loser ? 'Молодец!' : 'Эх!'}</span></h3>
    <button class="btn" on:click={() => dispatch('start')}>Ещё?</button>
</div>
<style>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        color: springgreen;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .loser {
        color: orangered;
    }
    .btn {
        margin-top: 10px;
        outline: none;
        border-radius: 4px;
        border: 2px solid oldlace;
        background-color: transparent;
        height: 35px;
        width: 100px;
        color: oldlace;
        cursor: pointer;
    }
</style>