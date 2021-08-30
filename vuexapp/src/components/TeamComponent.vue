<template>
    <div>
        <h2>Team {{type}}</h2>
        <ul>
            <li v-for="member in team" :key="member.name">
                {{member.name}}
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable */ 
import store from '../store/index'

export default {
    name: 'Team',
    props: ['type'],
    computed: {
        team() {
            return this.type === 'A' ? store.state.teamA : store.state.teamB 
        }
    }
}
</script>
