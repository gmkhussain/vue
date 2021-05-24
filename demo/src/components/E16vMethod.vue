<template>

    <h4>Method</h4>

    <div>{{ 2 + 2 }}</div>
    <div>
        {{ add(2, 4) }} // Function in Methdod
    </div>

    <div>
        Age:
        {{ getAge(2021) }}
    </div>

</template>

<script>
export default {
    name: 'e15',
    data() {
        return {
            yearOfBirth: 1994
        }
    },
    methods: {
        add(x, y) {
            return x + y;
        },
        getAge (x) {
            return x - this.yearOfBirth;
        }
    }
}
</script>
