<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <Products />
  </div>
</template>

<script>
import Products from '../components/Products.vue'
export default {
  name: 'Home',
  components: {
    Products
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
</style>
