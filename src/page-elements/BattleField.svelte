<script>
    export let myBattleCards = [];
    export let hisBattleCards = [];
</script>
<div>
    
    <div class="his-field">
        {#each hisBattleCards as card, i}
            {#if card}
                <img src={card.img} alt={i}>
            {/if}
        {/each}
    </div>

    <div class="me-field">
        {#each myBattleCards as card, i}
            {#if card}
                <img src={card.img} alt={i}>
            {/if}
        {/each}
    </div>
</div>
<style>
    .his-field, .me-field {
        justify-content: space-between;
    }
    img {
        border-radius: 4px;
    }
</style>