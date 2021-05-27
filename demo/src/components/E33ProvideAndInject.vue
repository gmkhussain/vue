<template>
  <div>
      <h4>Provide and Inject</h4>
  </div>
</template>

<script>
export default {
    name: 'e33',
    // props: ['name', 'age'],
    props: {
        name: {
            type: String,
            default: 'No Name'
        },
        age: {
            type: Number,
            default: 1
        },
        status: Boolean
    }
}
</script>

<style scoped>
</style>
