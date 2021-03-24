<script>
    export let firstCard = {}
    export let bank = [];
    export let kozyr = ''
    console.log(kozyr);
    let picKoz = {
        'p': 'пики',
        'b': 'буби',
        'c': 'черви',
        'x': 'крести',
    }
    console.log(picKoz[kozyr]);
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
    <div>
        <h4 style="color:#fff; text-align:center">{bank.length} <br> козырь {picKoz[kozyr]}</h4>
    </div>
</div>
{/if}
<style>
    .bank {
        display: flex;
        flex-direction: column;
        justify-content: center;
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