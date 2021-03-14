<template>
  <div id="app"> 
    <a href='./home'>Home</a>
    <a href='./about'>About</a>
    <a href='./crud'>Crud</a>
    
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
 

