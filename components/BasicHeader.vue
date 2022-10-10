<template>
  <div class="topic">
    <img  class="bitcoin_icon" src="../png/bitcoin-btc-logo.png">
    <span class="title">BITCOIN FRENZY</span>
    <span class="bitcoin_price_title"> 1 Bitcoin = {{bitcoinRate}} $</span>
    <div class="users_money">
      <span >{{usersMoney}} $</span>
      <span>{{usersBitcoin}} BITCOIN</span>
    
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'BasicHeader',
    computed: mapState(['bitcoinRate', 'usersMoney', 'usersBitcoin'])
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
    margin-left: 32%;
    margin-top: 10px;
    font-weight: 200;
    font-size: 18px;
  }
  .users_money {
    color: white;
    font-weight: 200;
    margin-left: 35%;
    display: flex;
    flex-direction: column;

  }

</style>
