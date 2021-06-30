<template>
  <div>
      <h4>E37 Slots</h4>
      <Card></Card>
      <Card><h2>Some HTML Text</h2></Card>
      <Card><img src="http://picsum.photos/200"></Card>
  </div>
</template>

<script>
import Card from './elements/Card.vue';

export default {
    name: 'e37',
    components: {
        Card
    },
    data () {
        return { }
    }
}
</script>

<style scoped>
</style>
