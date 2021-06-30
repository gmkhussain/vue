<template>
  <div>
      <h4>38 Named Slots</h4>
      <Card>
          <template v-slot:header>
              <h4>New Header</h4>
          </template>
          <template v-slot:default>
              <img src="//picsum.photos/80" alt="" />
          </template>
          <template v-slot:footer>
              <a href="#">View details</a>
          </template>
          
      </Card>
  </div>
</template>

<script>
import Card from './elements/E38_Card.vue';

export default {
    name: 'e38',
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
