<template>
    
    <div v-show="display">
        Display v-show true
    </div>

    <div v-if="display">
        Display v-if true
    </div>

</template>

<script>
export default {
    name: 'e11',
    data() {
        return {
            num: 0,
            display: false,      
        }
    }
}
</script>
