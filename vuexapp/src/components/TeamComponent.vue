<template>
    <div>
        <h2>Team {{type}}</h2>
        <ul>
            <li v-for="(member, index) in team" :key="member.name">
                {{member.name}}

                <button @click="removeFromTeam(type, index, member)">x</button>
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
    methods: {
        removeFromTeam(type, index, member) {
            store.dispatch('removeFromTeam', {type, index, member} )
        }
    },
    computed: {
        team() {
            return this.type === 'A' ? store.state.teamA : store.state.teamB 
        }
    }
}
</script>
