<template>
    <div>
        <BasicHeader/>
        <BasicLeftNavbar/>
    </div>
</template>
<script>
    import BasicHeader from './BasicHeader.vue';
    import BasicLeftNavbarVue from './BasicLeftNavbar.vue';
    import BasicLeftNavbar from './BasicLeftNavbar.vue';
    export default {
        name: "BasicComponents",
        component: { BasicHeader, BasicLeftNavbarVue },
        components: { BasicLeftNavbar }
    }
</script>