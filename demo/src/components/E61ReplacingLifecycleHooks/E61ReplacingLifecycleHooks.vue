<template>
    <div>
        <h4>E61ReplacingLifecycleHooks</h4>
        <p>lorem</p>
        <hr />
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'

export default {
    name: 'e61',
    setup() {
        onBeforeMount( ()=> {
            console.log(`BeforeMount --> called onBeforeMount()`)
        } ),
        onMounted( ()=> {
            console.log(`mounted -> called onMounted()`)
        } ),
        onBeforeUpdate( ()=> {
            console.log(`beforeUpdate --> called onBeforeUpdate() `)
        } ),
        onUpdated( ()=>{
            console.log(`updated --> called onUpdated() `)
        })
    },
}
</script>
