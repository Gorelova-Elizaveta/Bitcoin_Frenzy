<template>
    <button class="overall-button" @click="$emit('click')">
        <slot />
    </button>
</template>
<script>
    export default {
        emits: ['click']
    }
</script>
<style lang="scss"> 
    .overall-button {
        border-radius: 10px;
        background-color: rgb(31, 55, 125);
        color: white;
        font-weight: 300;
        border-color:rgb(31, 55, 125);
        padding: 0 15px 0 15px
    }

    .overall-button:hover {
        background-color: rgb(10, 25, 69);
        transition: 1s;
    }
</style>