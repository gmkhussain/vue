<template>
  <div>
    <E43TeleportComponent />
    <E42KeepingDynamicComponentsAlive/>
    <E41DynamicComponents />
    <E40ComponentStyles />
    <E39SlotsProps />
    <E38NamedSlots />
    <E37Slots />
    <E36ComponentsAndvModel />
    <E35ValidatingEmittedEvents />
    <E34ComponentEvents />
    <E33ProvideAndInject />
    <E32NonPropAttributes class="someClasses" id="myId" />
    <E31PropTypesAndValidations name="Alex Deo" :age="4" :status="true" />
    <!--E28 Components-->
    <E27vWatchers />
    <E26vComputedSetter />
    <E25vComputedAndvFor />
    <E24vComputedvsMethod />
    <E23vComputedProperty />
    <E22vOnceAndPre />
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
  </div>
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
import E22vOnceAndPre from './components/E22vOnceAndPre.vue'
import E23vComputedProperty from './components/E23vComputedProperty.vue'
import E24vComputedvsMethod from './components/E24vComputedvsMethod.vue'
import E25vComputedAndvFor from './components/E25vComputedAndvFor.vue'
import E26vComputedSetter from './components/E26vComputedSetter.vue'
import E27vWatchers from './components/E27vWatchers.vue'
import E31PropTypesAndValidations from './components/E31PropTypesAndValidations'
import E32NonPropAttributes from './components/E32NonPropAttributes'
import E33ProvideAndInject from './components/E33ProvideAndInject'
import E34ComponentEvents from './components/E34ComponentEvents'
import E35ValidatingEmittedEvents from './components/E35ValidatingEmittedEvents'
import E36ComponentsAndvModel from './components/E36ComponentsAndvModel'
import E37Slots from './components/E37Slots'
import E38NamedSlots from './components/E38NamedSlots'
import E39SlotsProps from './components/E39SlotsProps'
import E40ComponentStyles from './components/E40ComponentStyles'
import E41DynamicComponents from './components/E41DynamicComponents/'
import E42KeepingDynamicComponentsAlive from './components/E42KeepingDynamicComponentsAlive'
import E43TeleportComponent from './components/E43TeleportComponent'

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
    E21vModifiers,
    E22vOnceAndPre,
    E23vComputedProperty,
    E24vComputedvsMethod,
    E25vComputedAndvFor,
    E26vComputedSetter,
    E27vWatchers,
    E31PropTypesAndValidations,
    E32NonPropAttributes,
    E33ProvideAndInject,
    E34ComponentEvents,
    E35ValidatingEmittedEvents,
    E36ComponentsAndvModel,
    E37Slots,
    E38NamedSlots,
    E39SlotsProps,
    E40ComponentStyles,
    E41DynamicComponents,
    E42KeepingDynamicComponentsAlive,
    E43TeleportComponent    
  }
}
</script>
