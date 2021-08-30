/* eslint-disable */
const students = [
    {
        'id': 1,
        'name': "Amoos",
        'games': ['Tenis', 'Football'],
        'selected': false
    },
    {
        'id': 2,
        'name': "Bob",
        'games': ['Tenis', 'Football', 'Hockey'],
        'selected': false
    },
    {
        'id': 3,
        'name': "Cody",
        'games': ['Tenis'],
        'selected': false
    },
    {
        'id': 4,
        'name': "Dani",
        'games': ['Tenis', 'Football'],
        'selected': false
    },
    {
        'id': 5,
        'name': "Elle",
        'games': ['Tenis', 'Football', 'Circket'],
        'selected': false
    }
]


export default {
    getStudents(){
        return students;
    }
}