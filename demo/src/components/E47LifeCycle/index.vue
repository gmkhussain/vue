<template>
    <div>
        <h2>E47 E47LifeCycle</h2>
        <div>
            <p>childDisplay Status: {{childDisplay}}</p>
            <button v-on:click="childDisplay = false">False</button>
            <button v-on:click="childDisplay = true">True</button>
            <button v-on:click="childDisplay = !childDisplay">Toggle</button>
            <E47Child v-if="childDisplay" />
        </div>
    </div>
</template>

<script>
import E47Child from './E47Child.vue'

export default({
    name: 'E47',
    components: { E47Child },
    data() {
        return {
            childDisplay: true
        }
    },
    beforeCreate() {
        console.log( "Parent  beforeCreate()" );
    },
    created() {
        console.log( "Parent  created()" );
    },
    beforeMount(){
        console.log( "Parent  beforeMount()" );
    },
    mounted(){
        console.log( "Parent  mounted()" );
    },
    beforeUpdate(){
        console.log( "Parent  beforeUpdate()" );
    },
    updated(){
        console.log( "Parent  updated()" );
    },
    beforeUnmount(){
        console.log( "Parent  beforeUnmout()" );
    },
    Unmounted(){
        console.log( "Parent  Unmouted()" );
    }
})
</script>
