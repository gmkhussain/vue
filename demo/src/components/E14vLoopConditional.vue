<template>

    <h4>Loop Conditional</h4>

    <template v-for="user in users" :key="user">
        <h2 v-if="user === 'Bob'">{{user}}</h2>
    </template>

</template>

<script>
export default {
    name: 'e14',
    data() {
        return {
            users: ['Alex', 'Bob', 'Clark']
        }
    }
}
</script>
