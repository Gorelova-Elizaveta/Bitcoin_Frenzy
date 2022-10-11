<template>
    <div class="container-price-bitcoin">
    <button @click="setBitcoinRateIncreased" class="price-bitcoin">Increased Bitcoin price by 1,000$</button> 
    <button @click="setBitcoinRateDecreased" class="price-bitcoin">Decreased Bitcoin price by 1,000$</button> 
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    methods:{
        ...mapMutations(['setBitcoinRateIncreased', 'setBitcoinRateDecreased'])
    }

}

</script>
<style>
    .container-price-bitcoin {
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
        gap: 20px;
    }
    .price-bitcoin {
        width: 250px;
        height: 70px;
        border-radius: 10px;
        font-size: 18px;
        background-color: rgb(31, 55, 125);
        color: white;
        font-weight: 300;
        border-color:  rgb(31, 55, 125);
    }

    .price-bitcoin:hover {
        background-color: rgb(10, 25, 69);
        transition: 1s;
    }
</style>