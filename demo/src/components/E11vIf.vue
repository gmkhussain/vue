<template>
    Number <div v-if="num === 0">Zero</div>
        <div v-else-if="num === 1">One</div>
        <div v-else> Plus</div>

    <template v-if="display">
        display true,
    </template>
</template>

<script>
export default {
    name: 'e11',
    data() {
        return {
            num: 0,
            display: true,         
        }
    }
}
</script>
