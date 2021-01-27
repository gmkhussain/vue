<template>
  <div class="dashboard">
    <strong>{{ msg }}</strong>
   </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  data () {
    return {
      msg: '404 Error'
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
