<script>
    export let firstCard = {}
    export let bank = []
</script>
{#if bank.length}
<div class="bank">
    <div class="kozyr">
        <img src={firstCard.img} alt="first card">
    </div>
    
    {#if bank.length >= 2}
        <div class="koloda">
            <img src="cards/rubashka.bmp" alt="rub">
        </div>
    {/if}
</div>
{/if}
<style>
    .bank {
        position: relative;
        height: 200px;
    }
    .kozyr {
        transform: rotate(90deg);
    }
    .koloda {
        position: absolute;
        right: -50%;
        bottom: 50%;
        z-index: 3;
    }
</style>