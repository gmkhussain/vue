<template>
  <div class="row">
    <div class="card">
        <div id="card_header">
            <slot name="header">Default Header</slot>
        </div>
        <div id="card_content">
            <slot>Default Content</slot>
        </div>
        <div id="card_footer">
            <slot name="footer">Default Footer</slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.row {
    display: flex;
    width: 100%;
}
.card {
  border: 1px solid #777;
  box-shadow: 0 0 4px 2px #397;
  margin: 15px 0;
  max-width: 25%;
  flex: 0 0 25%;  
}
</style>
