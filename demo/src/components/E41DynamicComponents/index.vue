<template>
    <h4>E41</h4>

    <button @click="activeTab = 'Tab1'">Tab 1</button>
    <button @click="activeTab = 'Tab2'">Tab 2</button>
    
    <component :is="activeTab" />

    
</template>

<script>
import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'

export default {
    name: "e41",
    components: {
        Tab1,
        Tab2
    },
    data(){
        return {
            activeTab: 'Tab1'
        }
    }
}
</script>
