<template>
    <div>
        <h4>E54ReactivityAndToRefs</h4>

        <SetupRef />
        <SetupReactive />
    </div>    
</template>

<script>
import SetupRef from './SetupRef.vue'
import SetupReactive from './SetupReactive.vue'

export default {
  name: 'e54',
  components: {
      SetupRef,
      SetupReactive
  }
}
</script>
