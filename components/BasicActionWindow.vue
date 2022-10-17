<template>
<section class="container-for-actions">
<div  class="empty_history" v-if="!$store.state.user.actionList.length">empty history...</div>
    <ul class="catalogue" id="v-for-object">
        <li class="list-child" v-for="data of $store.state.user.actionList" :key="data.date" >
            <div class="list-value">{{ new Date(data.date).toLocaleString().slice(0, -3) }} </div>
            <div class="list-value-1">{{ data.value }}</div>
        </li>
    </ul>

</section>
</template>
<script>
    export default {
    name: 'BasicActionWindow',
}

</script>
<style lang="scss">
    ul {
        margin: 0;
        padding:0;
    }
    .container-for-actions {
        position: absolute;
        right: 0;
        width:  300px;
        height: calc(100% - 55px);
        background-color: rgb(210 210 210);
        overflow-y: scroll;
        color: rgb(31, 55, 125);
        list-style: none;
    }

    .list-child {
        border-bottom: 2px solid gray;
    }
    
    .date_action{
        margin-top: 10px;
        margin-left: 10px;
    }

    .list-value, .list-value-1 {
        padding: 5px 0 22px 45px;
    }

    .empty_history {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        font-size: 18px;
    }

</style>