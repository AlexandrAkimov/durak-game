<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let resultForHimCards = []
    export let cards = []
    const select = (e, card) => {
        if (e.currentTarget.children[0].style.display !== 'block') {
            resultForHimCards = [...resultForHimCards, card]
            e.currentTarget.children[0].style.display = 'block';
        } else {
            resultForHimCards = resultForHimCards.filter(c => c.img !== card.img)
            e.currentTarget.children[0].style.display = 'none';
        }
    }
</script>
<div class="modal">
    <div class="cards">
        {#each cards as card}
            <div class="card" on:click={(e) => select(e, card)} style={`background-image: url(/${card.img})`}>
                <img src="checked.png" alt="checked" width="20px" class="checked">
            </div>
            
        {/each}
    </div>
    <div>
        {#if resultForHimCards.length}
            <button class="btn" on:click={() => dispatch('addYet', resultForHimCards)}>Отдать</button>
        {/if}
        <button class="btn" on:click={() => dispatch('closeYet')}>Не давать</button>
    </div>
    
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
        background-color: rgba(0, 0, 0, 0.3);
    }
    .checked {
        display: none;
        position: absolute;
        right: 5%;
        top: 5%;
    }
    .card {
        position: relative;
        width: 70px;
        height: 95px;
        background-repeat: no-repeat;
        z-index: 5;
    }
    .select {
        background-color: olive;
        z-index: 99;
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
    .cards {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>