<template>
  <div class="hello">
    <router-link to="/home">Home</router-link>
    
    <router-link to='/404/'>404</router-link>

    <router-link v-if="authenticated" to='/dashboard/'>Dashboard</router-link>
    <!-- <router-link to='/dashboard/Id-18'>Dashboard?</router-link> -->
    <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <router-link v-else to="/login">Login</router-link>
  </div>
</template>
<script>
export default {
  name: 'NavMain',
  data () {
    return {
     authenticated: false,
    }
  }
}
</script>
