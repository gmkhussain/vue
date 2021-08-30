/* eslint-disable */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

import data from '../api/data'

export default new Vuex.Store({ // Use Caps
    state: { // data
        students: [],
        teamA: [],
        teamB: []
    },
    getters: { // computed properties

    },
    actions: { // methods
        getStudents(context) { // every action method need context param
            context.commit('setStudents')
        },

        addTeamMember(context, data) {
            context.commit('pushMemberToTeam', data)
            // method add in component
            console.log(data)


            context.commit('changeSelectedState', data.index) // Error in v-on handler: "ReferenceError: state is not defined
        }

    },
    mutations: { // Used for changing this state
        setStudents(state) {
            state.students = data.getStudents()
        },
        pushMemberToTeam(state, data) {
            if( data.type==='A') {
                state.teamA.push(state.students[data.index])
            } else {
                state.teamB.push(state.students[data.index])
            }
        },

        changeSelectedState(state, index) {
            console.log("index")
            state.students[index].selected = true
        }
    }
})
