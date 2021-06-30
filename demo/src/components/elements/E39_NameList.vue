<template>
   <p v-for="n in names" :key="n.firstName">
        <slot :fname="n.firstName" :lname="n.lastName"></slot>
   </p>
</template>

<script>
export default {
  name: "NameList",
  data() {
      return {
        names: [
            {
                firstName: "Alex",
                lastName: "Bell"
            },
            {
                firstName: "Bob",
                lastName: "Cord"
            },
            {
                firstName: "Cody",
                lastName: "Deo"
            },
        ]
      }
  }
}
</script>

<style scoped>

</style>
