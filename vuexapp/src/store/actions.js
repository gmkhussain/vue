/* eslint-disable */
export default { // methods
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

}