<template>
    <div>
        <h4>SetupReactive</h4>
        <p>Name: {{name}} from {{city}}</p>

        <hr>
    </div>    
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup() {
      
      const state = reactive({
          name: "Amoos",
          city: "Karachi"
      })

        setTimeout( ()=> {
            state.city="Paris"
            console.log(state)
        }, 4000)

        /*
        return {
         //   state
            name: state.name,
            city: state.city
        }
        */
       return toRefs(state)

    },
}
</script>
