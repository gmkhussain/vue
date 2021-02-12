<template>
  <div class="text-center">
    
    <div>{{ authenticated }}</div>
     
    <router-link to="/posts" class="nav-link">posts</router-link>
    <router-link to="/add" class="nav-link">Add</router-link>

    <router-link to="/home">Home</router-link>

    <router-link to="/home?test=somthing">Home?test=somthing</router-link>

    <router-link to="/404/">404</router-link>
    <!-- <router-link to='/dashboard/Id-18'>Dashboard?</router-link> -->
    <router-link v-if="authenticated" to="/dashboard/">Dashboard</router-link>
    <router-link
      v-if="authenticated"
      to="/login"
      v-on:click.native="logout()"
      replace
      >Logout</router-link
    >

    
    <router-link v-else to="/login">Login</router-link>

    <router-link to="/form-validation">Form Validation</router-link>
    <router-link to="/form-custom-validation">Custom Validation</router-link>

    <button @click="onClickButton">Change Login Navbar</button>
  </div>
</template>


<script>


export default {
  name: "NavMain",
  data() {
    return {
      authenticated: false,
    };
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked", (this.authenticated = true));
    },
  }
};
</script>
