<template>
  <div id="app">
    <NavMain></NavMain>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
/* eslint-disable */
import NavMain from '@/components/nav_main'

export default {
  name: 'App',
  data() {
      return {
          authenticated: false,
          // this is only for testing purposes no actual app will have this
          // an api call will validate user credentials
          mockAccount: {
              username: "admin",
              password: "admin123"
          }
      }
  },
  methods: {
          setAuthenticated(status) {
              this.authenticated = status;
          },
          logout() {
              this.authenticated = false;
          }
  },
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
