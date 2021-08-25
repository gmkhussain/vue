<template>
    <div>
        <h4>{{pageTitle}}</h4>
        <div>{{pageContent}}</div>

        <div class="form-group">
            <label for="o_title">O_title: {{o_title}}</label>
            <input id="o_title" type="text" class="form-control" v-model="o_title" />
        </div>
        <div class="form-group">
            <label for="c_title">c_title: {{c_title}}</label>
            <input type="text" class="form-control" v-model="c_title" />
        </div>

        <div class="form-group">
            <label for="name">Name: {{name}}</label>
            <input type="text" v-model="name" />
        </div>

        <div class="form-group">
            <label for="city">City: {{city}}</label>
            <select v-model="city">
                <option value="Berlin">Berlin</option>
                <option value="Karachi">Karachi</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
            </select>
        </div>

        <hr/>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
    name: "e56",

    setup() {
        const c_title = ref("C Title")
        const state = reactive({
            name: "Amoos",
            city: "Karachi"
        })

        return {
            c_title,
            ...toRefs(state)
        }
    },

    data(){
        return {
            pageTitle: "E56VModelAndCompositionAPI",
            pageContent: "Some text",
            o_title: "O Title"
        }
    }
}
</script>
