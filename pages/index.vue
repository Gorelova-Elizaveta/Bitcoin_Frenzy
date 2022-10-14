<template>
  <div class="wallet_container">
    <div class="text_block">
      <span class="ffff">Your Bitcoin wallet</span>
      <span class="ffff">You now own {{$store.state.user.usersBitcoin}} Bitcoins</span>
      <button  @click="setUsersMoneyDeposit" class="moneys_button moneys_button-indent ">deposit 100$</button>
      <button @click="setUsersMoneyWithdraw" class="moneys_button">withdraw 100$</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

 export default {
  computed: mapState([ 'usersBitcoin']),
  
  methods:{
    ...mapMutations({
      setUsersMoneyDeposit: 'user/setUsersMoneyDeposit',
      setUsersMoneyWithdraw:'user/setUsersMoneyWithdraw'}),
  }
 }


</script>

<style lang="scss">
  .wallet_container{
    position: absolute;
    width:700px;
    height: 400px;
    margin-left: 10%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
  }

  .text_block{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(31, 55, 125);
    font-size: 20px;
    font-weight: 500;
    gap: 20px;
  }

  .moneys_button {
    width: 150px;
    border-radius: 10px;
    font-size: 16px;
    background-color: rgb(31, 55, 125);
    color: white;
    font-weight: 300;
    border-color:  rgb(31, 55, 125);
  }

  .moneys_button:hover{
    background-color: rgb(10, 25, 69);
    transition: 1s;
  }
  
  .moneys_button-indent {
    margin-top: 30px;
  }


</style>  