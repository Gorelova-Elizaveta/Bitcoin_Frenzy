<template>
    <main class="container-buy-page">
        <MyButton @click="setUsersBitcoin($store.state.price.bitcoinRate)">Buy 1 bitcoin</MyButton>
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>