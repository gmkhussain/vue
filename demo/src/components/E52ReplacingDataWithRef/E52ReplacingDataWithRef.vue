<template>
    <div>
        <h4>E52ReplacingDataWithRef</h4>

        <p> Option API: {{o_title}} </p>
        <p> Composition API: {{c_title_key}}</p>
        <p> Composition Heading: {{heading}} </p>

    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "e53",
    setup() { /* This method is entry point for composotion API */
        
        /* 
            Ref: return reactive ref to value
            Its same as Ref template.
        */
        const c_title = ref(" Albert ")
              c_title.value ="Amoos"
              
              // you dont have to use .value in template, keep in mind work script use .value

        const heading = `Welcome ${c_title.value}`;

        console.log("Change title and check console without refresh: ", c_title)
        
        return {
            c_title_key: c_title,
            heading: heading
        }
    },
    data() {
        return {
            o_title: "Alex"
        }
    }
}
</script>
