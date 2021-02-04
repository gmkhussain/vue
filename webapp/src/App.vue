<template>
  <div id="app">
    <LogoBrand/>
    <NavMain @clicked="onClickChild" />
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
/* eslint-disable */
import LogoBrand from "@/components/logo_brand";
import NavMain from "@/components/nav_main";

export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      // this is only for testing purposes no actual app will have this
      // an api call will validate user credentials
      mockAccount: {
        username: "admin",
        password: "admin123",
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
    onClickChild (value) {
        console.log(value) // Parent component receive clicked event 
    }
  },
  mounted() {
    //router.push( )
    //router.push({ path: 'contact', query: { s: '123' }})
  },
  components: {
    NavMain: NavMain,
    LogoBrand: LogoBrand,
  },
};
</script>

<style lang="sass">
@import "./assets/main.scss"
</style>

