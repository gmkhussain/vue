<template>
  <div>
      <h4>Validating Emitted Events</h4>
      <button @click="showModal = true">Open Modal {{name}}</button>
      <Modal v-show="showModal" @close="closeModal" />

  </div>
</template>

<script>
import Modal from './modal/Modal_35.vue';

export default {
    name: 'e35',
    components: {
        Modal
    },
    data () {
        return {
            showModal : false
        }
    },
    methods: {
        closeModal(name) {
            this.showModal = false
            console.log("Name: ", name)
        }
    }
   
}
</script>

<style scoped>
</style>
