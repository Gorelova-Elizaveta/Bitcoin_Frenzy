
<template>
  <div>
    <BasicComponents/>
    <section class ="main">
      <div class="container">
        <Nuxt/>
      </div>
    </section>
  </div>
</template>
<script>
  import BasicComponents from "../components/BasicComponents.vue";
  
  export default {
  components: { BasicComponents }
   }



</script>