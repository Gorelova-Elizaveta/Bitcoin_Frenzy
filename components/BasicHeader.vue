<template>
  <header class="topic">
    <div class="logo_container">
      <img  class="bitcoin_icon" src="~/assets/logo/bitcoin-btc-logo.png">
      <span  translate="no" class="title">BITCOIN FRENZY</span>
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
    color:white;
    font-size: 18px;
  }
  .bitcoin_icon {
    width: 35px;
    height: 35px;
  }
  .users_money {
    display: flex;
    flex-direction: column;
  }
  .logo_container {
    display: flex;
    align-items: center;
    gap: 5px
  }

  
</style>
