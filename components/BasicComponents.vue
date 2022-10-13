<template>
    <div>
        <BasicHeader/>
        <BasicLeftNavbar/>
        <BasicActionWindow/>
    </div>
</template>
<script>
    import BasicHeader from './BasicHeader.vue';
    import BasicLeftNavbar from './BasicLeftNavbar.vue';
    import BasicActionWindow from './BasicActionWindow.vue';

    export default {
        name: "BasicComponents",
        components: { BasicHeader, BasicLeftNavbar, BasicActionWindow },
    }
</script>