<template>
<nav class="left-navbar">
    <ul class="navbar-nav mr-auto">
      <li v-for="{path, title} in refList" :key="path" :title="title" class="nav-item active">
        <nuxt-link active-class="active" class="nav-link" :to="path" exact>{{title}}</nuxt-link>
      </li>
    </ul>
</nav>
</template>
<script>
export default {
    name: 'BasicLeftNavbar',
    data: () => {
      return {
        refList: [
          {path: "/", title: "MY WALLET"},
          {path: "/buy", title: "BUY BITCOIN"},
          {path: "/sell", title: "SELL BITCOIN"},
          {path: "/price", title: "BITCOIN PRICE"},
        ]
      }
    },

}
</script>
<style lang="scss" scoped>
 .left-navbar {
    position: absolute;
    height: calc(100% - 55px);
    width: 250px;
    background-color: rgb(31, 55, 125) ;
 }
 .nav-link {
    color: white;
    font-weight: 300;
    margin-left:  20px;
    font-size: 18px;
 }

 .navbar-nav {
  margin-left: 10px;
  margin-top: 45px;
 }

 .active {
  color: brown;
 }

</style>