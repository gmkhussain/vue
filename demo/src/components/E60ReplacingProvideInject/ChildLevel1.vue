<template>
    <div>
        <h4>Child Level 1</h4>
        <ChildLevel2 />
    </div>
</template>

<script>
import ChildLevel2 from './ChildLevel2.vue'
export default {
    name: "Child Level 1",
    components: {
        ChildLevel2
    },
}
</script>
