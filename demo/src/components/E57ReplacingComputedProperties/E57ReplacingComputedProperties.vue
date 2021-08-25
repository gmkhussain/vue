<template>
    <div>
        <h4>{{pageTitle}}</h4>
        <p>{{pageContent}}</p>
        <div> {{fullInfo}} </div>

        <h4>c_fullInfo</h4>
        <p>{{name}} | {{city}}</p>
        <p>{{c_fullInfo}}</p>


        <h4>c_Reactive</h4>
        <div class="form-group">
            <input type="text" class="form-control" v-model="price" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="qty" />
        </div>
        <p>Total: {{c_total}}</p>

        <hr/>
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'

export default {
    name: "e57",
    setup(){
        const name = ref("Amoos")
        const city = ref("Karachi")

        const c_fullInfo = computed(
            function(){
                return `fullInfo: ${name.value} and ${city.value}`
            }
        )



        const state = reactive({
            price: 100,
            qty: 2
        })

        const c_total = computed(
            function(){
                return `${state.price*state.qty} fullInfo: ${state.price} and ${state.qty}`
            }
        )
 

        return {
            name,
            city,
            c_fullInfo,
            c_total,
            ...toRefs(state)
        }

    },
    data(){
        return {
            pageTitle: "E57ReplacingComputedProperties",
            pageContent: "some text"
        }
    },
    computed: {
        fullInfo() {
            return `This info this... ${this.pageTitle} and ${this.pageContent}`
        }
    }
}
</script>
