<template>
    <h4>Listing</h4>
    <div v-for="(user, index) in users" :key="user">
        {{index}}  {{user}}
    </div>

    <h4>Object</h4>
    <div v-for="(data, key, index) in dataObj" :key="data">
        {{index}} {{data.key}}  {{name}} {{age}}
    </div>

    <h4>Array</h4>
    <div v-for="(data, index) in dataArray" :key="data.name">
        {{index}} {{data.name}}

      <ul>
        <li v-for="(skill,  idx) in data.skills" :key="skill">
            {{idx}} {{skill}}
        </li>
      </ul>
    </div>    

</template>

<script>
export default {
    name: 'e13',
    data() {
        return {
            users: ['Alex', 'Bob', 'Clark'],
            dataObj: [
                { name:"Alex", age:"30"},
                { name:"Bob", age:"24"},
                { name:"Clark", age:"20"}
            ],
            dataArray: [
                {
                    name: "Alex",
                    skills: ["HTML", "CSS"]
                },
                {
                    name: "Bob",
                    skills: ["HTML", "CSS", "JavaScript"]
                },
                {
                    name: "Clark",
                    skills: ["HTML", "CSS", "JavaScript", "MySQL"]
                }
            ]
        }
    }
}
</script>
