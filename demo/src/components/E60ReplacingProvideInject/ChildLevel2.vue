<template>
    <div>
        <h4>Child Level 2</h4>
        <ChildLevel3 />
    </div>
</template>

<script>
import ChildLevel3 from './ChildLevel3.vue'
export default {
    name: "Child Level 2",
    components: {
        ChildLevel3
    },
}
</script>
