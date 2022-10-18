<template>
    <main class="container-sell-bitcoin">
     <span class="description">Bitcoin price is {{$store.state.price.bitcoinRate}}$</span>
     <div class="description" v-if="$store.state.price.bitcoinRate >= 10000">Prices are high, sell now!</div>
     <div class="description" v-else>Prices are low, are you sure you want to sell?</div>
    <MyButton @click="setUsersBitcoinSell">Sell 1 Bitcoin</MyButton>
    </main>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    methods:{
        ...mapMutations({
            setUsersBitcoinSell: 'user/setUsersBitcoinSell'})
    }
}
</script>
<style lang="scss">
    .container-sell-bitcoin {
        position: absolute;
        width:700px;
        height: 400px;
        margin-left: 10%;
        margin-top: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(31, 55, 125);
        font-weight: 500;
    }
    
    .description {
        font-size: 20px;

    }


</style>