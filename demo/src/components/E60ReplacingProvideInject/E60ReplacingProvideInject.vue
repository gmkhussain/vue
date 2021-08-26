<template>
    <div>
        <h4>{{pageTitle}}</h4>
        <div>
            <label>c_title: {{c_title}}</label>
            <input type="text" class="form-control" v-model="c_title" />
            <button @click="c_title += 1 "> Change Title</button>
        </div>


        <h4>Reactive</h4>
        <div class="form-group">
            <label>Price: {{p_price}}</label>
            <input class="form-control" v-model="p_price" v-on:change="p_total" />
        </div>
        
        <div class="form-group">
            <label>Qty: {{p_qty}}</label>
            <input class="form-control" v-model="p_qty" />
        </div>

        <pre>Total: {{p_total}}</pre>


        <h4>Child</h4>

        <ChildLevel1 />

        <hr/>
    </div>
</template>

<script>
import ChildLevel1 from './ChildLevel1.vue'

import { provide, ref, reactive, toRefs, computed } from 'vue'

export default {
    name: "e60",
    components: { ChildLevel1 },
    setup() {

       provide('c_staticString', "I'm Static String Value")

        const c_title = ref('A')
        provide('p_c_title', c_title)





        const state = reactive({
            p_price: 100,
            p_qty: 1
        })


        const p_total = computed(
            function(){
                return state.p_price * state.p_qty 
            }
        )


        provide('p_c_total', p_total)


        return {
            c_title,
            ...toRefs(state),
            p_total
        }

    },
    data() {
        return {
            pageTitle: "E60ReplacingProvideInject"
        }
    },
    provide() {
        return {
            parentName: "e60"
        }
    }

}
</script>
