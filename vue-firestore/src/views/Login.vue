  
<template>
  <div class="home">
    Login
    <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login">
      <p>Need an account? <router-link to="/register"></router-link> </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    
    const Login = () => { 
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data=>console.log(data))
        .catch(arr=>alert(err.message));
    }
  }
}
</script>
