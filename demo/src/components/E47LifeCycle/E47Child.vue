<template>
    <div>
        Hello, I'm E47Child
    </div>
</template>

<script>
export default({
    name: "E47Child",
    beforeCreate() {
        console.log( "Child  beforeCreate()" );
    },
    created() {
        console.log( "Child  created()" );
    },
    beforeMount(){
        console.log( "Child  beforeMount()" );
    },
    mounted(){
        console.log( "Child  mounted()" );
    },
    beforeUpdate(){
        console.log( "Child  beforeUpdate()" );
    },
    updated(){
        console.log( "Child  updated()" );
    },
    beforeUnmount(){
        console.log( "Child  beforeUnmout()" );
    },
    Unmounted(){
        console.log( "Child  Unmouted()" );
    }
});
</script>
