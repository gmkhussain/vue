<template>
    <div>
        <h4>{{pageTitle}}</h4>

        <div class="form-group">
            User: <input type="text" class="form-control" v-model="name" >
            City: <input type="text" class="form-control" v-model="city">
        </div>

        <p>Add `:` before attribute name to pass props value to child components</p>
        <E64Child :name="name" :city="city"  @getFullMsgFromChild="getFullMsgFromChildFn"  />

        <hr/>
    </div>
</template>

<script>
import { ref } from 'vue'

import E64Child from './E64Child.vue'


export default {
    name: "e64",
    components: { E64Child },
    setup() {
        const name = ref('')
        const city = ref('')

        function getFullMsgFromChildFn(x) {
            alert(`Calling ${x}`)
        }

        return {
            name,
            city,
            getFullMsgFromChildFn
        }
    },
    data() {
        return {
            pageTitle: "E64CustomEventsAndCompositionAPI"
            // name: '',
            // city: ''
        }
    }
}
</script>
