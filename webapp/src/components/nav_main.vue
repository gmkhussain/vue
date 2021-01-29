<template>
  <div class="hello">
    <div>{{ authenticated }}</div>

    <router-link to="/home">Home</router-link>

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
  },
};
</script>
