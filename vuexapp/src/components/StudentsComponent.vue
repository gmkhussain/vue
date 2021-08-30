<template>
  <div class="hello">
    <span>{{ msg }}</span>

    <table border="1">
      <tr v-for="(student, index) in students" :key="student.id">
        <td>{{index}} | {{student.id}} </td>
        <td>{{student.name}}</td>
        <td>( {{student.games.length}} )</td>
        <td>
          <button @click="addTeamMember('A', index)" :disabled="student.selected" >Team A</button>
          <button @click="addTeamMember('B', index)" :disabled="student.selected" >Team B</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
/* eslint-disable */
import store from '../store/index'

export default {
  name: 'StudentsComponent',
  data () {
    return {
      msg: 'Welcome to App',
    }
  },
  computed: {
    students () {
      return store.state.students
    }
  },
  created () {
    // this.students = data.getStudents()
    store.dispatch('getStudents')
  },
  methods: {
    addTeamMember ( type, index ) {
      // console.log( type )
      store.dispatch('addTeamMember', { type, index })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[disabled] {
  opacity: .2 !important;
}
</style>
