<template>
  <div class="header">
      <strong><router-link to="/">Logo</router-link></strong>
      <span class="cart">
        <router-link to="/cart">0</router-link>
      </span>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
