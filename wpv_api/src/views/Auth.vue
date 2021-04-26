<template>
    <div class="auth">
      {{name}}
      
      {{login_status}}
      <div v-if="login_status=false">{{login_status}}</div>
      
      <form action="">
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" />
          </div>
          <div class="form-group">
            <input type="text" v-model="password" class="form-control" />
          </div>
          <hr/>
          <p><small>
          {{username}}
          {{password}}
          </small></p>
          <button @click="getToken()">Login</button>
      </form>
      
      <button @click="logout()" v-if="login_status=true">Logout</button>

    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Auth',
  data () {
    return {
      name: "Auth Page",
      token_status: false,
      login_status: false,
      username: 'admin',
      password: 'admin123'
    }
  },
  methods: {  

    logout1() {
      console.log("Logout..."+ localStorage.getItem("token"))
      localStorage.removeItem("token")
      this.login_status=false;
      this.login_token=false;
      console.log(this.login_status)
    },

    async getToken() {

          await axios.post('/jwt-auth/v1/token', {
              username: this.username,
              password: this.password
          },  this.config )
          .then(response => {
            
            localStorage.setItem("token", response.data.token)
            console.log(response.data.token)
            this.token_status = true

          }) 
          .catch(err => {
            console.log("Error")
            this.token_status = "Login failed please enter correct Username and Password"
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

