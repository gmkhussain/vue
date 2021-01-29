<template>
  <div class="dashboard">
    <strong>{{ msg }}</strong>
    {{ authenticated }}
     <div>Direct in HTML {{$route.params.id}}</div>
    <div>from Script {{id}}</div>
   </div>
</template>

<script>
export default {
  name: 'DashboardScreen',
 
  data () {
      return {
        msg: 'Welcome to dashboard',
        id: parseInt(this.$route.params.id),
        authenticated: true,
      }
    },
    mounted() {
        if(!this.$parent.authenticated) {
          this.$router.replace({ name: "Login" });
          //this.$emit("clicked", (this.authenticated = true))
        }
    }, 
    methods: {
    }    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
