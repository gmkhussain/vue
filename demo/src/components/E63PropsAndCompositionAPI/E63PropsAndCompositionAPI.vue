<template>
    <div>
        <h4>{{pageTitle}}</h4>

        <div class="form-group">
            User: <input type="text" class="form-control" v-model="name" >
            City: <input type="text" class="form-control" v-model="city" >
        </div>

        <p>Add `:` before attribute name to pass props value to child components</p>
        <E63Child :name="name" :city="city" />
        
        <hr/>
    </div>
</template>

<script>
import E63Child from './E63Child.vue'

import { ref } from 'vue'

export default {
    name: "e63",
    components: { E63Child },
    setup() {
        const name = ref('')
        const city = ref('')

        return {
            name,
            city
        }
    },
    data() {
        return {
            pageTitle: "E63PropsAndCompositionAPI"
            // name: '',
            // city: ''
        }
    }
}
</script>
