<template>
    <div>
        <h4>E55ReplacingMethods</h4>
        <p>o_title: {{o_title}}</p>
        <button v-on:click="setTitleFn">Change O_Title</button>

        <p>ref_title: {{ref_title}}</p>
        <button v-on:click="setRefTitlefn">Change C_Title</button>

        <p>Name: {{name}}</p>
        <p>City: {{city}}</p>
        <button v-on:click="setReactiveDataFn">Set Reactive Data</button>

        <hr/>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
    name: "e55",
    setup() {

        const ref_title = ref("Old Title")
        function setRefTitlefn () {
            console.log("Clicked")
            ref_title.value="New Title"
        }

        
        const state = reactive({
            name: "Amoos",
            city: "Karachi"
        })
        function setReactiveDataFn() {
            state.name = "Jhon",
            state.city = "Paris"
        }


        return {
            ref_title,
            setRefTitlefn,
            ...toRefs(state), // toRefs: for Reactive Refernce, Its use use without having `state.name` and `state.city`
            setReactiveDataFn
        }

    },
 
    data() {
        return {
            o_title: "About"
        }
    },
    methods: {
        setTitleFn(){
            this.o_title = "About New"
        }
    }
}
</script>
