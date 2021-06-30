<template>
  <div>
      <!--https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg/related?hl=en-->
      <h4>36 - Components and v-model</h4>
      {{name}}
      <Input v-model="name" />

  </div>
</template>

<script>
import Input from './forms/input.vue';

export default {
    name: 'e36',
    components: {
        Input
    },
    data () {
        return {
            name: '_'
        }
    }
}
</script>

<style scoped>
</style>
