<template>
  <header class="topic">
    <div class="ic-ti">
      <img  class="bitcoin_icon" src="~/assets/logo/bitcoin-btc-logo.png">
      <span class="title">BITCOIN FRENZY</span>
   </div>
    <div class="bitcoin_price_title"> 1 BTC = {{$store.state.price.bitcoinRate}} $</div>
    <div class="users_money">
      <span >{{$store.state.user.usersMoney}} $</span>
      <span>{{$store.state.user.usersBitcoin}} BTC</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'BasicHeader',
  }
</script>
<style lang="scss">
  .topic {
    background-color: rgb(31, 55, 125);
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 55px;
    padding-right: 120px;
    font-weight: 200;
  }
  .bitcoin_icon {
    width: 35px;
    height: 35px;
  }
  .title {
    color:white;
    font-size: 20px;
  }
  .bitcoin_price_title {
    color: white;
    font-size: 18px;
  }
  .users_money {
    color: white;
    display: flex;
    flex-direction: column;
  }
</style>
