<template>
  <div class="hello">
    <strong>{{ msg }}</strong>

    <div v-if="name">
      <span v-text="name"></span>
       <span v-bind:title="tooltip">Hover Me</span>
    </div>
    <div v-else>
      Name not founded
      <span v-title="tooltip"></span>
    </div>

    <div class="input">
      <p>{{inputtext}}</p>
      <input type="text" v-model="inputtext" />
      <button v-on:click="inputtext = 'baz'">Change it to baz</button>
    </div>

     <table>
      <tr v-for="user in users">
        <td> {{ user.id }} </td>
        <td> {{ user.name }} </td>
        <td> {{ user.city }} </td>
      </tr>
    </table>
    <button v-on:click="addUser">Add User</button>

    <p>{{ num1 * num2 }}</p>
    <input v-model="num1">
    <input v-model="num2">
 

   </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: "Amoos",
      inputtext: 'Change my text',
      msg: 'Welcome to WebApp',
      tooltip:  'Tooltip text',
	  num1: 1,
      num2: 1,
      users: [
        { id: '001', name: "Amoos", city: "Paris" },
        { id: '002', name: "Billy", city: "London" },
        { id: '003', name: "Cody", city: "Barlin" },
        { id: '004', name: "Danny", city: "Venus" }
      ]
    }
  },
  methods: {
    addUser: function () {
      this.users.push({ id: '005', name: "Eddy", city: "NY" })
    }
  },
  watch: { 
    inputtext: function(newVal, oldVal) {
      console.log('New value: ', newVal, ' | Old value: ', oldVal)
    }
  },
  created() {
    /*
     * created hook can be used to run code after an instance is created
     */
    console.log("Created")
  },
  mounted() {
    /*
     * Mounting takes place at the Virtual Dom Level, before the User sees anything.
     */
    console.log("Monted")
  },
  update() {
    console.log("Update")
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
