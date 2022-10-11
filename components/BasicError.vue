<template>
    <!-- <div class="error_container" v-if="errors.length > 0">
      {{errors}}
     </div> -->
     <b-toast v-if="errors.length > 0">а</b-toast>
</template>
<script>

import  { mapState } from "vuex"
export default {
  name: 'BasicError',
  computed: mapState([ 'errors']),
} 
</script>
<style>
.error_container {
    position: absolute;
    width: 301px;
    height: 181px;
        left: 59%;
    top: 66%;
    box-shadow: 1px 2px 33px 8px #e59d9d;
    border-radius: 10px;
    background-color: #e59d9d;
    border-color: #e59d9d;

}

</style>