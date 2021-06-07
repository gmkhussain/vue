<template>
  <div>
      <h4>Modal Title</h4>
      <button @click="$emit('close', 'Custome Name')"> Close Modal</button>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    emits: ['close']
}
</script>

<style scoped>
</style>
