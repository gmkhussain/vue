<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="row">
      <div class="col-3" v-for="(product, key) in getProducts" :key="key">
        <h4>{{product.name}}</h4>
        <p>price: {{product.price}}</p>
        <p>quantity: {{product.quantity}}</p>
        <button>Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getProducts']) // from store/projcts.js
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
 
.col-3 {
  float: left;
  width: 20%;
  border: 1px solid #d0d;
  padding: 15px;
}
</style>
