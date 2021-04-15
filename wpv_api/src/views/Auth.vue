<template>
    <div class="auth">
      {{name}}
      <form action="">
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" />
          </div>
          <div class="form-group">
            <input type="text" v-model="password" class="form-control" />
          </div>
          <hr/>
          {{username}}
          {{password}}
      </form>
      <button @click="getToken()">Token</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Auth',
  data () {
    return {
      name: "Auth Page",
      username: 'admin',
      password: 'admin123'
    }
  },
  methods: {  

    async getToken() {

          await axios.post('/jwt-auth/v1/token', {
              username: this.username,
              password: this.password
          },  this.config )
          .then(response => {

            localStorage.setItem("token", response.data.token)
            console.log(response.data.token)

          }) 
          .catch(err => {
            console.log(err)
          })
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

