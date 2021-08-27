<template>
    <div>
        <h4>E62TemplateRefsAndCompositionAPI</h4>
        <div class="form-group">
            <input type="text" class="form-control" ref="inputRef" />
            <button v-on:click="focusFn">Click to focus</button>
        </div>

        <h4>Ref</h4>
        <div class="form-group">
            <input type="text" class="form-control" ref="c_inputRef" />
        </div>

        <hr/>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: "e62",
    setup() {
        const c_inputRef = ref('')
 
        onMounted( ()=>{
           // alert(0) // for testing..
            c_inputRef.value.focus()
        })

        return {
            c_inputRef
        }
    },
    data() {
        return {
            pageTitle: ""
        }
    },
    methods: {
        focusFn() {
            this.$refs.inputRef.focus()
        }
    }
}
</script>
