<template>
  <main class="wallet-container">
    <div class="text-block">
      <span class="informational">Your Bitcoin wallet</span>
      <span class="informational">You now own {{$store.state.user.usersBitcoin}} Bitcoins</span>
      <MyButton @click="setUsersMoneyDeposit">deposit 100$</MyButton>
      <MyButton @click="setUsersMoneyWithdraw">withdraw 100$</MyButton>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

 export default {
  methods:{
    ...mapMutations({
      setUsersMoneyDeposit: 'user/setUsersMoneyDeposit',
      setUsersMoneyWithdraw:'user/setUsersMoneyWithdraw'}),
  }
 }
</script>

<style lang="scss">
  .wallet-container{
    position: absolute;
    width:700px;
    height: 400px;
    margin-left: 10%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
  }

  .text-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(31, 55, 125);
    font-weight: 500;
    gap: 20px;
  }
</style>  