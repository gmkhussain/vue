<template>
  <div class="interpolations">

    <div v-once>This will never change: {{ num1*inputtext }}</div>
    <div>This will change: {{ num1*inputtext }}</div>

    <div class="watch__function">
      <p>{{inputtext}}</p>
      <input type="text" v-model="inputtext" />
      <button v-on:click="inputtext = 3">Change it to 3</button>
      <button v-on:click="inputtext = 4">Change it to 4</button>
    </div>


    <p v-bind:title="amoos">Using mustaches: {{ rawHtml }}</p>
    <p :title="jamoos">Using v-html directive: <span v-html="rawHtml"></span></p>

   </div>
</template>

<script>
export default {
  name: 'interpolations_',
  data () {
    return {
        name: "alex",
        rawHtml: '<strong>Change</strong> my text <u>underline</u>',
        inputtext: 'Change my text',
        num1: 1,
        num2: 1,     
    }
  },
  methods: {
  
  },
  watch: { 
    inputtext: function(newVal, oldVal) {
      console.log('New value: ', newVal, ' | Old value: ', oldVal)
    }
  }
}
</script>
