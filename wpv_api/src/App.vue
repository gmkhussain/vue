<template>
  <div id="app"> 
    <nav>
      <a href='./auth'>Auth</a>
      <label> :: </label>
      <a href='./home'>Home</a>
      <a href='./about'>About</a>
      <a href='./crud'>Crud</a>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
       
    };
  },
  methods: {
     
  },
  mounted() {
    //router.push( )
    //router.push({ path: 'contact', query: { s: '123' }})
  },
  components: {

  },
};
</script>
 