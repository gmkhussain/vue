<template>
    <div>
        <h4>E49TemplateRefs</h4>
        {{title}}
        
        <input type="text" ref="inputRef" />
    </div>
</template>

<script>
export default {
    name: 'e49',
    mounted() {
        // Open in new window and check.
        this.$refs.inputRef.focus()
    },
    data() {
        return {
            title: "E49"
        }
    }
}
</script>
