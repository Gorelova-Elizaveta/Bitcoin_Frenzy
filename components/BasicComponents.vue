<template>
    <div>
        <BasicHeader/>
        <BasicLeftNavbar/>
        <BasicActionWindow/>
        <BasicError/>
    </div>
</template>
<script>
    import BasicHeader from './BasicHeader.vue';
    import BasicLeftNavbar from './BasicLeftNavbar.vue';
    import BasicActionWindow from './BasicActionWindow.vue';
    import BasicError from './BasicError.vue';

    export default {
        name: "BasicComponents",
        components: { BasicHeader, BasicLeftNavbar, BasicActionWindow, BasicError },
    }
</script>