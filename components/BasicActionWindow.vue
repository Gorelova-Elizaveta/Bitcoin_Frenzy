<template>
<div class="container-for-actions">
<div  class="empty_history" v-if="!actionList.length">empty history...</div>
    <ul class="catalogue" id="v-for-object">
        <li class="list-child" v-for="data of actionList" :key="data.date" >
            <div class="list-value">{{ new Date(data.date).toLocaleString().slice(0, -3) }} </div>
            <div class="list-value">{{ data.value }}</div>
        </li>
    </ul>

</div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
    name: 'BasicActionWindow',
    computed: mapState([ 'actionList']),
}

</script>
<style>
    ul {
        margin: 0;
        padding:0;
    }
    .container-for-actions {
        position: absolute;
        right: 0;
        width:  300px;
        height: 100vh;
        background-color: rgb(210 210 210);;
    }
    .catalogue {
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

    .list-value{
        padding: 15px 0 32px 45px;
    }

    .empty_history {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        font-size: 18px;
        color: ;
    }

</style>