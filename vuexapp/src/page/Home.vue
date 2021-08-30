<template>
    <div>
        <h4>Home</h4>
        <hr>
        <StudentsComponent />
        <TeamComponent type="A" />
        <TeamComponent type="B" />
    </div>
</template>

<script>
/* eslint-disable */ 
import StudentsComponent from '../components/StudentsComponent.vue'
import TeamComponent from '../components/TeamComponent.vue'

export default {
  components: { StudentsComponent, TeamComponent },
  name: 'Home'
}
</script>
