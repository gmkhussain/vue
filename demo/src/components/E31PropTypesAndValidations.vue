<template>
  <div>
    <h4>PropTypesAndValidations</h4>
    <p> {{name}} | {{age}} | {{status ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
export default {
    name: 'e31',
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
