<template>
    <div class="container-buy-page">
    <button @click="setUsersBitcoin($store.state.price.bitcoinRate)" class="buy-bitcoin">Buy 1 bitcoin</button>
    </div>
</template>
<script>
   import { mapMutations } from 'vuex';
   export default {
    methods:{
        ...mapMutations({
            setUsersBitcoin: 'user/setUsersBitcoin'
        }),
    }
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .buy-bitcoin {
        width: 150px;
        height: 50px;
        border-radius: 10px;
        font-size: 20px;
        background-color: rgb(31, 55, 125);
        color: white;
        font-weight: 300;
        border-color:  rgb(31, 55, 125);
    }
    .buy-bitcoin:hover {
        background-color: rgb(10, 25, 69);
        transition: 1s;
    }
</style>