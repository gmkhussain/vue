<template>
    <div>
        <h4>E50Reuse</h4>
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
            justCounts: 59 
            // if redefine new value in component, vue consider component data()
        }
    }
}
</script>
