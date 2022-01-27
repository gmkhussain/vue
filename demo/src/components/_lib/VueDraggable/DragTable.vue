<template>
    <!-- <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
        <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable> -->

    <draggable 
        v-model="myArray" 
        group="people" 
        @start="drag=true" 
        @end="drag=false" 
        item-key="id">
        <template #item="{element}">
            <div>{{element.name}}</div>
        </template> 
    </draggable>

</template>
<script>
import draggable from 'vuedraggable'
export default {
    name: "vDragTable",
    components: {
        draggable,
    },
    data() {
        return {
            myArray: [
                { 
                    id: 1,
                    name: "A"
                    
                },
                { 
                    id: 2,
                    name: "B"
                }
            ]
        }
    }
}
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>