<template>

  <E15vMethod />
  <E14vLoopConditional />
  <E13vLoop />
  <E12vShow />
  <E11vIf />
  <HelloWorld msg="Welcome to Your App"/>
  <Home /> 

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import E11vIf from './components/E11vIf.vue'
import E12vShow from './components/E12vShow.vue'
import E13vLoop from './components/E13vLoop.vue'
import E14vLoopConditional from './components/E14vLoopConditional.vue'
import E15vMethod from './components/E15vMethod.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    E11vIf,
    E12vShow,
    E13vLoop,
    E14vLoopConditional,
    E15vMethod
  }
}
</script>
