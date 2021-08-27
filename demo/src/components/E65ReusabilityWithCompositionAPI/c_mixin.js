import { ref } from 'vue'

export default function c_mixinsCounter(intCount = 0, step = 1) {
    
    const c_Counts = ref(intCount)

    function c_CounterFn() {
        c_Counts.value += step
    }
    
    return {
        c_Counts,
        c_CounterFn
    }

}