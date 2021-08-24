<template>
    <div>
        <h4>SetupRef</h4>
        <p>Name: {{title}}</p>

        <hr>
    </div>    
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
      const title = ref("Welcome to...")

        setTimeout( ()=> {
            title.value = "Welcome to Home"
            console.log(title)
        }, 4000)

        return {
            title
        }

    },
}
</script>
