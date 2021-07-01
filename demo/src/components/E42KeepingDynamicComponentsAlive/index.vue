<template>
    <h4>E42</h4>

    <button @click="activeTab = 'Tab1'">Tab 1</button>
    <button @click="activeTab = 'Tab2'">Tab 2</button>
    
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
    
</template>

<script>
import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'

export default {
    name: "e42",
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
