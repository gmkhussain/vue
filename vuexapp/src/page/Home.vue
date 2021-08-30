<template>
    <div>
        <h4>Home</h4>
        <hr>
        <StudentsComponent />
        <TeamComponent type="A" />
        <TeamComponent type="B" />
        <InfoComponent />
    </div>
</template>

<script>
/* eslint-disable */ 
import StudentsComponent from '../components/StudentsComponent.vue'
import TeamComponent from '../components/TeamComponent.vue'
import InfoComponent from '../components/InfoComponent.vue'

export default {
  components: { StudentsComponent, TeamComponent, InfoComponent },
  name: 'Home'
}
</script>
