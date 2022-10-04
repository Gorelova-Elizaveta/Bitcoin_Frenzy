<template>
<div class="topic">
<img  class="bitcoin_icon" src="../png/bitcoin-btc-logo.png">
<span class="title">BITCOIN FRENZY</span>
<span class="bitcoin_price_title"> 1 Bitcoin = {{bitcoinRate}} $</span>
</div>
</template>

<script>

export default {
  name: 'BasicHeader',
  computed: {
    bitcoinRate() {
      return this.$store.getters.getBitcoinRate
    }
}

}

</script>
<style>
  .topic {
    background-color: rgb(31, 55, 125);
    width: 100%;
    height: 55px;
    display: flex;

  }
  .bitcoin_icon {
    width: 35px;
    height: 35px;
    margin-left: 30px;
    margin-top: 8px;
  }
  .title {
    color:white;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 200;
  }
  .bitcoin_price_title {
    color: white;
    margin-left: 35%;
    margin-top: 10px;
    font-weight: 200;
    font-size: 18px;
  }

</style>
