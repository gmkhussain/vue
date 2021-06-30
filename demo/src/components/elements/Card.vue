<template>
    <div class="card">
        <slot>Default content</slot>
    </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.card {
  border: 1px solid #777;
  box-shadow: 0 0 4px 10px #744;
  margin: 15px 0;
}
</style>
