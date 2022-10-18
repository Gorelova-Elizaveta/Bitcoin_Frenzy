<template>
    <main class="container-price-bitcoin">
      <span>Bitcoin price is {{$store.state.price.bitcoinRate}}$</span>
      <section class="price-button">
        <MyButton @click="setBitcoinRateIncreased($store.state.user.actionList)">
        Increased Bitcoin 
        price by 1,000$
        </MyButton>
        <MyButton @click="setBitcoinRateDecreased($store.state.user.actionList)">
        Decreased Bitcoin 
        price by 1,000$
        </MyButton>
      </section>
    </main>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    methods:{
        ...mapMutations({
            setBitcoinRateIncreased: 'price/setBitcoinRateIncreased', 
            setBitcoinRateDecreased: 'price/setBitcoinRateDecreased'})
    }
}
</script>
<style lang="scss">
    .container-price-bitcoin {
        position: absolute;
        width:700px;
        height: 400px;
        margin-left: 10%;
        margin-top: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        color: rgb(31, 55, 125);
        font-weight: 500;
    }

    .price-bitcoin {
        width: 250px;
        height: 70px;
        border-radius: 10px;
        background-color: rgb(31, 55, 125);
        color: white;
        font-weight: 300;
        border-color:  rgb(31, 55, 125);
    }

    .price-bitcoin:hover {
        background-color: rgb(10, 25, 69);
        transition: 1s;
    }

    .price-button {
        margin-top: 30px;
        white-space: pre-wrap;

    }
</style>