<template>
  <div>
    <E65ReusabilityWithCompositionAPI />
    <E64CustomEventsAndCompositionAPI />
    <E63PropsAndCompositionAPI />
    <E62TemplateRefsAndCompositionAPI />
    <E61ReplacingLifecycleHooks />
    <E60ReplacingProvideInject />
    <!--E59 ReplaceingWatchers Deep / Lodash -->
    <E58ReplaceingWatchers />
    <E57ReplacingComputedProperties />
    <E56VModelAndCompositionAPI />
    <E55ReplacingMethods />
    <E54ReactivityAndToRefs />
    <E53ReplacingDataWithReactive />
    <E52ReplacingDataWithRef />
    <!--51 - Composition API-->
      <E50Reuse />
    <E50ReusabilityWithMixins />
    <E49TemplateRefs />
    <E48GETRequestOnPageLoad />
    <E47LifeCycle />
    <E46HttpPostRequest />
    <E45HttpGetRequest/>
    <!--E44HTTPandVue--> npm install --save axois
    <E43TeleportComponent /> <!--Vue3-->
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
import E65ReusabilityWithCompositionAPI from './components/E65ReusabilityWithCompositionAPI/E65ReusabilityWithCompositionAPI.vue'
import E64CustomEventsAndCompositionAPI from './components/E64CustomEventsAndCompositionAPI/E64CustomEventsAndCompositionAPI.vue'
import E63PropsAndCompositionAPI from './components/E63PropsAndCompositionAPI/E63PropsAndCompositionAPI.vue'
import E62TemplateRefsAndCompositionAPI from './components/E62TemplateRefsAndCompositionAPI/E62TemplateRefsAndCompositionAPI.vue'
import E61ReplacingLifecycleHooks from './components/E61ReplacingLifecycleHooks/E61ReplacingLifecycleHooks.vue'
import E60ReplacingProvideInject from './components/E60ReplacingProvideInject/E60ReplacingProvideInject.vue'
import E58ReplaceingWatchers from './components/E58ReplacingWatchers/E58ReplacingWatchers.vue'
import E57ReplacingComputedProperties from "./components/E57ReplacingComputedProperties/E57ReplacingComputedProperties.vue"
import E56VModelAndCompositionAPI from './components/E56VModelAndCompositionAPI/E56VModelAndCompositionAPI.vue'
import E55ReplacingMethods from './components/E55ReplacingMethods/E55ReplacingMethods.vue'
import E54ReactivityAndToRefs from './components/E54ReactivityAndToRefs/E54ReactivityAndToRefs.vue'
import E53ReplacingDataWithReactive from './components/E53ReplacingDataWithReactive/E53ReplacingDataWithReactive.vue'
import E52ReplacingDataWithRef from './components/E52ReplacingDataWithRef/E52ReplacingDataWithRef.vue'
import E50Reuse from "./components/E50ReusabilityWithMixins/E50Reuse.vue"
import E50ReusabilityWithMixins from "./components/E50ReusabilityWithMixins/E50ReusabilityWithMixins.vue"
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
import E45HttpGetRequest from './components/E45HttpGetRequest'
import E46HttpPostRequest from './components/E46HttpPostRequest'
import E47LifeCycle from './components/E47LifeCycle'
import E48GETRequestOnPageLoad from './components/E48GETRequestOnPageLoad'
import E49TemplateRefs from './components/E49TemplateRefs'

export default {
  name: 'App',
  components: {
    E65ReusabilityWithCompositionAPI,
    E64CustomEventsAndCompositionAPI,
    E63PropsAndCompositionAPI,
    E62TemplateRefsAndCompositionAPI,
    E61ReplacingLifecycleHooks,
    E60ReplacingProvideInject,
    E58ReplaceingWatchers,
    E57ReplacingComputedProperties,
    E56VModelAndCompositionAPI,
    E55ReplacingMethods,
    E54ReactivityAndToRefs,
    E53ReplacingDataWithReactive,
    E52ReplacingDataWithRef,
    E50Reuse,
    E50ReusabilityWithMixins,
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
    E43TeleportComponent,
    E45HttpGetRequest,
    E46HttpPostRequest,
    E47LifeCycle,
    E48GETRequestOnPageLoad,
    E49TemplateRefs
  }
}
</script>
