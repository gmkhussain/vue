<template>
  <div class="hello">
    <span>{{ msg }}</span>

    <h4>Students - Counts: {{studentCount}}</h4>
    <table border="1">
      <tr v-for="(student, index) in students" :key="student.id">
        <td>{{index}} | {{student.id}} </td>
        <td>{{student.name}}</td>
        <td>( {{student.games.length}} )</td>
        <td>
          <button @click="addTeamMember({type:'A', index})" :disabled="student.selected" >Team A</button>
          <button @click="addTeamMember({type:'B', index})" :disabled="student.selected" >Team B</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'StudentsComponent',
  data () {
    return {
      msg: 'Welcome to App',
    }
  },
  computed: {
    /* students () {
       return this.$store.state.students
     }
     // alternate mapState
    */
    ...mapState(['students']),
    ...mapGetters(['studentCount'])
  },
  created () {
    // this.students = data.getStudents()
    this.$store.dispatch('getStudents')
  },
  methods: {
    /* addTeamMember ( type, index ) {
      // console.log( type )
      this.$store.dispatch('addTeamMember', { type, index })
     }
    alertnate  ...mapActions()
    */
    ...mapActions(['addTeamMember'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[disabled] {
  opacity: .2 !important;
}
</style>
