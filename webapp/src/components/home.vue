<template>
  <div class="hello">
    <strong>{{ msg }}</strong>

    <div v-if="name">
      <span v-text="name"></span>
    </div>
    <div v-else>
      Name not founded
    </div>

   </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: "Amoos",
      msg: 'Welcome to WebApp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
