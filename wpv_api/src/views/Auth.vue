<template>
    <div class="auth">
      {{name}}
      <div v-if="login_status">{{login_status}}</div>
      
      <form action="" v-if="login_status!=true">
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" />
          </div>
          <div class="form-group">
            <input type="text" v-model="password" class="form-control" />
          </div>
          <hr/>
          {{username}}
          {{password}}
          <button @click="getToken()">Token</button>
      </form>
      
      <div @click="logout()" v-if="login_status=true">Logout</div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Auth',
  data () {
    return {
      name: "Auth Page",
      login_status: '',
      username: 'admin',
      password: 'admin123'
    }
  },
  methods: {  

    logout() {
      console.log("Logout...")
      localStorage.setItem("token", 'LOGOUT')
    },

    async getToken() {

          await axios.post('/jwt-auth/v1/token', {
              username: this.username,
              password: this.password
          },  this.config )
          .then(response => {
            
            localStorage.setItem("token", response.data.token)
            console.log(response.data.token)
            this.login_status = true

          }) 
          .catch(err => {
            console.log("Error")
            this.login_status = "Login failed please enter correct Username and Password"
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

