<template>
  <div class="topic">
    <div class="ic-ti">
      <img  class="bitcoin_icon" src="../png/bitcoin-btc-logo.png">
      <span class="title">BITCOIN FRENZY</span>
   </div>
    <div class="bitcoin_price_title"> 1 Bitcoin = {{bitcoinRate}} $</div>
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
    justify-content: space-between;
    padding-left: 55px;

  }
  .bitcoin_icon {
    width: 35px;
    height: 35px;
    margin-top: 8px; 
  }
  .title {
    color:white;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 200;
  }
  .bitcoin_price_title {
    color: white;
    margin-top: 10px;
    font-weight: 200;
    font-size: 18px;
  }
  .users_money {
    color: white;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    padding-right:120px;

  }

</style>
