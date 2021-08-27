<template>
    <div>
        <h4>Child</h4>
        <!-- <p>User {{name}} from {{city}}</p> -->
        <p> {{fullMsg}} </p>

        <button @click="sendCustomEvent">Send Custome Event</button>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: "e64 child",
    setup(props, context) {

        const fullMsg = computed( ()=>{
            return `User ${props.name} from ${props.city}`
        } )

        function sendCustomEvent() {
            console.log("custom event clicked")
            context.emit('getFullMsgFromChild', fullMsg.value)
        }

        return {
            fullMsg,
            sendCustomEvent // <-- Added here
        }
    },
    data() {
        return {
            pageTitle: "Child"
        }
    },
    props: ['name', 'city'], //<-- import to for both setup and option
    emits: ['getFullMsgFromChild']

}
</script>
