<script>
  export let firstCard = {};
  export let bank = [];
  export let kozyr = "";
  console.log(kozyr);
  let picKoz = {
    p: "пики",
    b: "буби",
    c: "черви",
    x: "крести",
  };
  const imgKoz = [
    { color: "red", code: "&#9829;", koz: "черви" },
    { color: "#000", code: "&#9829;", koz: "пики" },
    { color: "red", code: "&#9829;", koz: "черви" },
    { color: "#000", code: "&#9829;", koz: "крести" },
  ];
  const smallKoz = imgKoz.find(k => k.koz === picKoz[kozyr])
</script>

{#if bank.length}
  <div class="bank">
    <div class="kozyr">
      <img src={firstCard.img} alt="first card" />
    </div>

    {#if bank.length >= 2}
      <div class="koloda">
        <img src="cards/rubashka.bmp" alt="rub" />
      </div>
    {/if}
    <div>
      <h4 style="color:#fff; text-align:center">
        {bank.length} <br /> козырь {picKoz[kozyr]}
      </h4>
    </div>
  </div>
  <div class="small">
    {#if kozyr === 'c'}
        <div style={`font-size: 50px;color: red`}>&#9829;</div>
    {/if}
    {#if kozyr === 'b'}
        <div style={`font-size: 50px;color: red`}>&#9830;</div>
    {/if}
    {#if kozyr === 'x'}
        <div style={`font-size: 50px;color: #000`}>&#9827;</div>
    {/if}
    {#if kozyr === 'p'}
        <div style={`font-size: 50px;color: #000`}>&#9824;</div>
    {/if}
    <div class="rubashka">
      <span style="color: green;font-weight:bold;font-size:30px">{bank.length}</span>
      <span>БАНК</span>
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
  .small {
    display: none;
  }
  .rubashka {
    background-image: url("/cards/rubashka.bmp");
    border-radius: 36px;
    width: 70px;
    height: 140px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: green;
    font-size: 17px;
    font-weight: bold;
  }
  @media (max-width: 400px) {
    .bank {
      display: none;
    }
    .small {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  img {
      border-radius: 4px;
  }
</style>
