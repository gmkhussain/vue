<template>
    <div>
        <h4>Child</h4>
        <!-- <p>User {{name}} from {{city}}</p> -->
        {{fullMsg}}
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: "e63 child",
    setup(props) {
        const fullMsg = computed( ()=>{
            return `User ${props.name} from ${props.city}`
        } )

        return {
            fullMsg
        }
    },
    data() {
        return {
            pageTitle: "Child"
        }
    },
    props: ['name', 'city'] //<-- import to for both setup and option 
}
</script>
