<template>
    <h4>Forms</h4> 
    
    <pre>
    {{ JSON.stringify(formValues, null, 2) }}
    </pre>

    <form @submit="submitForm">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formValues.name" />
        </div>
        <div>
            <label for="desc">Description</label>
            <textarea type="text" id="desc" v-model="formValues.desc"></textarea>
        </div>
        <div>
            <label for="country">Country</label>
            <select id="country" v-model="formValues.country">
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Russia">Russia</option>
                <option value="Turkey">Turkey</option>
            </select>
        </div>

        <div>
            <label for="education">Education</label>
            <select id="education" multiple v-model="formValues.education">
                <option value="Inter">Inter</option>
                <option value="Bacholar">Bacholar</option>
                <option value="Master">Master</option>
            </select>
        </div>
        

        <div>
            <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
            <label for="remoteWork">Open to remote work ?</label>
        </div>

        <div>
            <label for="skillSets">Skill Sets:</label>
            
            <input type="checkbox" id="HTML" value="HTML" v-model="formValues.skillSets" />
            <label for="HTML">HTML</label>

            <input type="checkbox" id="CSS" value="CSS" v-model="formValues.skillSets" />
            <label for="CSS">CSS</label>

        </div>


        <div>
            <label for="gender">Gender</label>
            <input type="radio" id="male" value="male" v-model="formValues.gender" /> <label for="male">Male</label>

            <input type="radio" id="female" value="female" v-model="formValues.gender" /> <label for="female">Female</label>

        </div>


        <button>Submit</button>

    </form>

</template>

<script>
export default {
    name: 'e19',
    data() {
        return {
            formValues: {
                name: '',
                desc: '',
                country: '',
                education: [],
                remoteWork: 'no',
                skillSets: [],
                gender: ''
            }
        }
    },
    methods: { 
        submitForm(event){
            event.preventDefault()
            console.log("All value:", this.formValues )       
        }
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>
