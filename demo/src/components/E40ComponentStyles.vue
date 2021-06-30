<template>
  <div>
      <h4>E40 Component Styles</h4>
      <p>dasd</p>
      <Card>
          <p>This slot content color pick from this parent</p>
          next card color is from child
      </Card>
      <Card></Card>
  </div>
</template>

<script>
import Card from './elements/Card.vue'

export default {
    name: 'e40',
    components: {
        Card
    },
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
h4, p {
    color: green;
}
</style>
