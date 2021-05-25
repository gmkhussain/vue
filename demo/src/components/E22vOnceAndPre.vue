<template>
  <div>
    <h4 v-once>vOnce: {{count}}</h4> 
    <h4>Regular: {{count}}</h4> 
    <button v-on:click='count += 1'>Add </button>

     
  </div>
</template>

<script>
export default {
    name: 'e22',
    data() {
        return { 
            count: 0
        }
    },
    methods: {  
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>
