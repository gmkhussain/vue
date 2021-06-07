<template>
  <div>
      <h4>Provide and Inject</h4>
      <button @click="showModal = true">Open Modal {{name}}</button>
      <Modal v-show="showModal" @close="closeModal" />

  </div>
</template>

<script>
import Modal from './modal/Modal.vue';

export default {
    name: 'e34',
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
