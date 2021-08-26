<template>
    <div>
        <h4>{{pageTitle}}</h4>
        
        <div class="form-group">
            <label>Name: {{name}}</label>
            <input type="text" class="form-control" v-model="name" />
        </div>

        <div class="form-group">
            <label>City: {{city}}</label>
            <input type="text" class="form-control" v-model="city" />
        </div>


        <h4>Ref</h4>
        <div class="form-group">
            <label>ref_title: {{ref_title}}</label>
            <input type="text" class="form-control" v-model="ref_title" />
        </div>

        <div class="form-group">
            <label>ref_body: {{ref_body}}</label>
            <input type="text" class="form-control" v-model="ref_body" />
        </div>


        <h4>Reactive Watcher</h4>
        <div class="form-group">
            <label for="school">react_title: {{react_title}}</label>
            <input type="text" class="form-control" v-model="react_title" />
        </div>

        <div class="form-group">
            <label for="batch">react_body: {{react_body}}</label>
            <input type="text" class="form-control" v-model="react_body" />
        </div>


        <h4>Deep State Watcher</h4>
        <div class="form-group">
            <label for="batch">deep state: {{sections.slider}}</label>
            <input type="text" class="form-control" v-model="sections.slider" />
        </div>
        <hr>

    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue'
import _ from 'lodash'

export default {
    name: "e58",
    setup() {
        const ref_title = ref('Amoos')
        const ref_body = ref('')

        watch([ref_title, ref_body], (newVals, oldVals)=> {
                console.log(` ref_newVal 0: ${newVals[0]} --- ref_oldVal 0: ${oldVals[0]} `)
                console.log(` ref_newVal 1: ${newVals[1]} --- ref_oldVal 1: ${oldVals[1]} `)
            },
            {
                immediate: true
            }
        )






        const state = reactive({
            react_title: "Amoos React",
            react_body: "Body React",
        })

        /* watch(state, function(newVal, oldVal) { 
            state: on very key stroke new and old value are same
            in reactive behavoir both value will be the same, 
            use getting function to resolve this issue
            ()=> {
                return {...state} 
            }
        */
        watch(
            ()=> {
                return {...state} 
            }
            , function(newVal, oldVal) {
            console.log(`
                Title NewVal :: ${newVal.react_title}
                Title OldVal :: ${oldVal.react_title}

                Body NewVal :: ${newVal.react_body}
                Body OldVal :: ${oldVal.react_body}
                
                Sections NewVal :: ${newVal.react_body}
                Sections OldVal :: ${oldVal.react_body}
            `)
        })








        // Single / Deep
        const deepState = reactive({
            sectionTitle: "",
            sections: {
                nav: "yes",
                slider: "no"
            }
        })

        watch(
            // ()=>deepState.sections.slider, // '()=>deepState.sections' will working without `deep:true`
            ()=> _.cloneDeep(deepState.sections),
            function(newVal, oldVal){
                console.log(`
                    New:: ${newVal.slider}
                    Old:: ${oldVal.slider}
                `)
            },
            {
                deep: true
            }
        )




        return {
            ref_title,
            ref_body,
            ...toRefs(state),
            ...toRefs(deepState)
        }
    },
    data() {
        return {
            pageTitle: "E58ReplacingWatchers",
            name: "",
            city: "Karachi" 
        }
    },
    watch: {
        name(newVal, oldVal) {
            console.log(`New: ${newVal} || Old: ${oldVal}`)            
        },
        city(newVal, oldVal) {
            console.log(`New: ${newVal} || Old: ${oldVal}`)
            if(newVal == 'Karachi') {
                alert("OK")
            }     
        }
    }

}
</script>
