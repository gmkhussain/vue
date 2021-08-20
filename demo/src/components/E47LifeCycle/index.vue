<template>
    <h2>E47 E47LifeCycle</h2>
</template>

<script>
export default({
    name: 'E47',
    beforeCreated() {
        console.log( "beforeCreated" );
    },
    created() {git 
        console.log( "created" );
    },
    beforeUpdated(){
        console.log( "beforeUpdated" );
    },
    updated(){
        console.log( "updated" );
    },
    beforeMounted(){
        console.log( "beforeMounted" );
    },
    mounted(){
        console.log( "mounted" );
    },
    beforeUnmouted(){
        console.log( "beforeUnmouted" );
    },
    Unmouted(){
        console.log( "Unmouted" );
    }
})
</script>
