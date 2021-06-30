<template>
  <div>
      <h4>E39 Slots Props</h4>
      
      <h4>NameList #1</h4>
      <NameList>
          <template v-slot:default="slotProps">
              {{slotProps.fname}}
          </template>
      </NameList>
      
      <h4>NameList #2</h4>
      <NameList>
          <template v-slot:default="slotProps">
              {{slotProps.lname}}, {{slotProps.fname}}
          </template>
      </NameList>
  </div>
</template>

<script>
import NameList from './elements/E39_NameList.vue';

export default {
    name: 'e39',
    components: {
        NameList
    },
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
</style>
