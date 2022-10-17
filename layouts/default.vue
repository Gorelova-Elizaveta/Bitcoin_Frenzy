<template>
  <main>
    <BasicComponents/>
    <section class ="main">
      <div class="container">
        <Nuxt/>
      </div>
    </section>
  </main>
</template>
<script>
  import BasicComponents from "../components/BasicComponents.vue";
  
  export default {
    components: { BasicComponents }
  }
</script>