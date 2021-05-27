<template>
  <div> <!--Props ID and class will add on DIV tag and H4 too-->
    <h4 v-bind="$attrs">Non Prop Attributes</h4>
    <p> {{name}} | {{age}} | {{status ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
export default {
    name: 'e32',
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
