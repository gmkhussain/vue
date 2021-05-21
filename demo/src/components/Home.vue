<template>
    Hi, from home {{data}}
    <div v-bind:style="[st1, st2]">/-/-/-/</div>
    <button @click='clk("Amoos")'>A</button>
</template>

<script>
export default {
    name: 'Home',
    props: {
        data: String
    },
    data() {
        return {
            st1: { color: 'orange' },
            st2: { fontSize: '42px' }
        }
    },
    methods:{
        clk(x) {
            alert("hello world..." + x);
        }
    }
}
</script>
