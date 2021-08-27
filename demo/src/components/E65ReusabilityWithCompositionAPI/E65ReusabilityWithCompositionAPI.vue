<template>
    <div>
        <h4>E65ReusabilityWithCompositionAPI</h4>
        <p>...</p>
        <button @click="c_CounterFn">Click {{c_Counts}} </button>
        <hr />
    </div>
</template>

<script>
import c_mixinsCounter from './c_mixin.js'

export default {
    name: "e65",
    setup() {
        const { c_Counts, c_CounterFn  } = c_mixinsCounter(0, 5)
        
        return {
            c_Counts,
            c_CounterFn
        }
    },
    // mixins: [c_mixinsCounter]
}
</script>
