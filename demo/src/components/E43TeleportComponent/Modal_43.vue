<template>
  <div class="modal-overlay" @click="$emit('close2')">
    <div class="modal-content">
      <slot></slot>
      <!--slot receive data from parent--->
      <hr />
      <button @click="$emit('close2')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal43",
  emits: ["close2"],
};
</script>


<style>
.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-content {
  font-family: "Fondamento", cursive;
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  min-height: 300px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
}
</style>