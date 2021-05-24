<template>

    <h4>{{name}} Events</h4>

    <button v-on:click=" name = 'Amoos'">Change Name</button>

    <h5>Inine counter value: {{count}}</h5>
    <button v-on:click='count += 1'>+</button>
    <button v-on:click='count -= 1'>-</button>


    <h5>Method counter value with parameter: {{mcount}}</h5>
    <button v-on:click='increment(5)'>+</button>
    <button v-on:click='decrement(5)'>-</button>

    <h5>Click Event... check console {{text}}</h5>
    
    <button @click="showEvent">Show event without Parameter</button>

    <h5>{{text}}</h5>
    <button @click="showEventWithParameter('My New Title', $event)">Show event with Parameter</button>

    <h5>Multiple Events</h5>

    <div>{{mcount}} {{text}}</div>
    
    <button @click="increment(5), showEventWithParameter('My New Title', $event)"> Click & see multiple event </button>

</template>

<script>
export default {
    name: 'e17',
    data() {
        return {
            name: 'Untitled',
            count: 0,
            mcount: 0,
            text: ''
        }
    },
    methods: {
        increment(x){
            this.mcount += x;
        },
        decrement(x){
            this.mcount -= x;
        },
        showEvent(event) {
            this.text = 'Alex';
            console.log('event', event);
        },
        showEventWithParameter(x ,event) {
            this.text = x;
            console.log('event', event);
        },
        
    }
}
</script>
