<template>
  <div class="hello">
    <a :href="'/home/'">Home</a>
    <a :href="'/login/'">Login</a>
    <a :href="'/dashboard/'">Dashboard</a>
    <a :href="'/dashboard/?s=45454'">Dashboard?</a>
    <a :href="'/404/'">404</a>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'Not found'
    }
  }
}
</script>
