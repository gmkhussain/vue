<template>
  <div>
      <h4>Modal Title 35 | {{name}}</h4>

      <input type="text" v-model="name" />
      <button @click="$emit('close', name )"> Close Modal</button>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    emits: {
        close: (name) => {
            /* Validate name is blank or filled */
            if(!name) {
                return false
            } else {
                return true
            }
        }
    },
    data() {
        return {
            name: ''
        }    
    }
}
</script>

<style scoped>
</style>
