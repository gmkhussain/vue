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
        studentCount(state, gatters) {
            return state.students.length
        }

    },
    actions: { // methods
        getStudents(context) { // every action method need context param
            context.commit('setStudents')
        },

        addTeamMember(context, data) {
            context.commit('pushMemberToTeam', data)
            // method add in component
            console.log(data)

            context.commit('enableSelectedState', data.index) // Error in v-on handler: "ReferenceError: state is not defined
        },
        
        removeFromTeam(context, data) {
            context.commit('disableSelectedState', data)
            context.commit('spliceFromTeam', data)
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

        enableSelectedState(state, index) {
            console.log(state.students)
            state.students[index].selected = true
        },
        disableSelectedState(state, data) {
            console.log("disableSelectedState", data)
            // state.students[data.index].selected = false
            console.log("data",data)
            state.students.forEach( (student)=>{
                student.id === data.member.id ? student.selected = false : "";
            })
        },

        spliceFromTeam(state, data) {
            if(data.type==='A') {
              state.teamA.splice(data.index, 1)
            } else {
              state.teamB.splice(data.index, 1)
            }
            // state.teamA.splice(data.index,1)
        }
    }
})
