<template>
    <div>
        <h4>E53ReplacingDataWithReactive</h4>

        <p> Option API: {{o_title}} </p>
        <p> Reactive: <span v-html="pageData"></span></p>
        
        <p>
           Ref: myBooleanValue1 : {{myBooleanValue1}}
        </p>
        <p>
           Reactive: myBooleanValue2: {{myBooleanValue2}}
        </p>

    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: "e53",
    setup() {
        const c_title = ref(" Albert ")

       /*
        Reactive: only receive object as argument, NOT JS primitives ( String, Boolean, Number, etc. ) 
       */
       const state = reactive({
           title: "Home",
           body: "Welcome to home",
           counts: 5
       })

        const pageData = `<h4>${state.title}</h4>
                          <p>${state.body}</p>
                          <div>${state.counts}</div>
                        `
        /*
         ref() it's a primitive (for example 'string', true, 59, etc)
         ref() has a .value property for reassigning, reactive() does not have this and therefore CANNOT be reassigned
         Check console.log for details
        */

        const myBooleanValue1 = ref(1) // <-- Correct
        
        console.log("myBooleanValue1", myBooleanValue1)

        const myBooleanValue2 = reactive({
            value: true
        })
        
        console.log("myBooleanValue2", myBooleanValue2)
        
        return {
            c_title_key: c_title,
            pageData: pageData,
            myBooleanValue1,
            myBooleanValue2
        }
    },
    data() {
        return {
            o_title: "Alex"
        }
    }
}
</script>
