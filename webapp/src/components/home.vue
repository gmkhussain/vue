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

     <table>
      <tr v-for="user in users">
        <td> {{ user.id }} </td>
        <td> {{ user.name }} </td>
        <td> {{ user.city }} </td>
      </tr>
    </table>
    <button v-on:click="addUser">Add User</button>

   </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: "Amoos",
      msg: 'Welcome to WebApp',
      tooltip:  'Tooltip text',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
