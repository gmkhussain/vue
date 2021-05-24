<template>
  <E21vModifiers />
  <!-- E20 -->
  <E19vForm />
  <!--E18 see E17-->
  <E17vEvents />
  <E16vMethod />
  <!--E15 see E14-->
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
import E16vMethod from './components/E16vMethod.vue'
import E17vEvents from './components/E17vEvents.vue'
import E19vForm from './components/E19vForm.vue'
import E21vModifiers from './components/E21vModifiers.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    E11vIf,
    E12vShow,
    E13vLoop,
    E14vLoopConditional,
    E16vMethod,
    E17vEvents,
    E19vForm,
    E21vModifiers
  }
}
</script>
