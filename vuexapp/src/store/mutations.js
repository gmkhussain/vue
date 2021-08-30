/* eslint-disable */
export default { // Used for changing this state
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