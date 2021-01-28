<template>
    <div id="login">
        <h1>Login</h1>
        <div class="form-inputs">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="Username"
            value="admin" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password"
            value="admin123" />
        </div>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                // This should actually be an api call not a check against this.$parent.mockAccount
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "Dashboard" }); // <-- Once Login Successfully App Landed on Dashboard
                } else {
                  alert("The username and / or password is incorrect");
                }
            } else {
                  alert("A username and password must be present");
            }
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
