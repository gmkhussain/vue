<template>
  <div class="dashboard">
    <strong>{{ msg }}</strong>
   </div>
</template>

<script>
export default {
  name: 'TutorialsList',
  data () {
    return {
      msg: 'TutorialsList'
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
