<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Login">Login</router-link>|
      <router-link to="/Register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

export default {

    setup () {
      const router = useRouter();
      const route = useRoute();

      onBeforeMount(()=> {
          firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
              router.replace('/login');
            } else if ( route.path == '/login' || route.path == "/register") {
              router.replace('/')
            }
          }
        )
      }) 
    }

    
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
