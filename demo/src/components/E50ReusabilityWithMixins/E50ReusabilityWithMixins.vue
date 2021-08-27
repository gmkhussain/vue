<template>
    <div>
        <h4>E50ReusabilityWithMixins</h4>
        <button v-on:click="clickCounterFn">Click {{clickCounts}} times</button>
        <h5 v-on:mouseover="mouseOverCounterFn">Mouse Over  {{mouseOverCounts}} times</h5>

        <button v-on:click="justCounterFn">Mixin Click {{justCounts}} times </button>
        
    </div>
</template>

<script>
import mixinsCounter from './mixin.js'

export default {
    name: 'e50',
    mixins: [mixinsCounter],
    data() {
        return {
            clickCounts: 0,
            mouseOverCounts: 0
        }
    },
    methods: {
        clickCounterFn() {
            this.clickCounts += 1
        },
        mouseOverCounterFn() {
            this.mouseOverCounts += 1
        }
    }
}
</script>
