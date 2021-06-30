<template>
    <div class="card">
        <slot>
          <p>Default content</p>
        </slot>
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
  box-shadow: 0 0 4px 2px #397;
  margin: 15px 0;
  max-width: 25%;
  flex: 0 0 25%;  
}
p {
  color: hotpink;
}
</style>
