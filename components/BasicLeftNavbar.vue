<template>
<div class="left-navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link active-class="active" class="nav-link" to="/"> MY WALLET </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link active-class="active" class="nav-link" to="/buy">BUY BITCOIN</nuxt-link>
      </li>
      <li class="nav-item dropdown">
      </li>
      <li class="nav-item">
      <nuxt-link active-class="active" class="nav-link" to="/sell">SELL BITCOIN</nuxt-link>
      </li>
      <li class="nav-item">
      <nuxt-link active-class="active" class="nav-link" to="/price">BITCOIN PRICE</nuxt-link>
      </li>
    </ul>
</div>
</template>
<script>
export default {
    name: 'BasicLeftNavbar'
}
</script>
<style>
 .left-navbar {
    position: absolute;
  /* margin-top: 55px; */
    height: 100vh;
    width: 250px;
    background-color: rgb(31, 55, 125) ;
 }

 .nav-link {
    color: white;
    font-weight: 300;
    margin-left:  20px;
 }

</style>