<template>
    <button class="buy-bitcoin" @click="$emit('click')">
        <slot />
    </button>
</template>
<script>
    export default {
        emits: ['click']
    }
</script>
<style lang="scss">
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