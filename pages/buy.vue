<template>
    <main class="container-buy-page">
    <span>Bitcoin price is {{$store.state.price.bitcoinRate}}$</span>
    <div class="price-warning" v-if="$store.state.price.bitcoinRate >= 10000">Prices are high, are you sure that you want to buy?</div>
    <div class="price-warning" v-else>Prices are low, buy more!"</div>
        <MyButton @click="setUsersBitcoin($store.state.price.bitcoinRate)">Buy 1 Bitcoin</MyButton>
    </main>
</template>
<script>
   import { mapMutations } from 'vuex';
   export default {
    methods: {
        ...mapMutations({
            setUsersBitcoin: "user/setUsersBitcoin"
        }),
    },
}

</script>
<style lang="scss">
    .container-buy-page {
        position: absolute;
        width:700px;
        height: 400px;
        margin-left: 10%;
        margin-top: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;;
        color: rgb(31, 55, 125);
        font-weight: 500;
        
    }
    .price-warning {
        margin-top: 35px;
        margin-bottom: 35px;
    }
</style>