<template>
  <div id="app">
    <NavMain />
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import NavMain from '@/components/nav_main'

export default {
  name: 'App',
  mounted() {
   //router.push( )
   //router.push({ path: 'contact', query: { s: '123' }})
  },
  components: {
    'NavMain': NavMain
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
