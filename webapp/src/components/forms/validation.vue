<template>
    <form id="form" @submit="checkForm">

        <p v-if="input.errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in input.errors">{{ error }}</li>
            </ul>
        </p>


        <div class="form-inputs">
            <label for="name">Full name</label>
            <input type="text" id="username" name="username" v-model="input.fullname" placeholder="Name"
            value="Alex Deo"  />
        </div>
        <div class="form-inputs">
            <label for="name">Email</label>
            <input type="email" id="email" name="email" v-model="input.email" placeholder="Email"
            value="info@xyz.com"  />
        </div>
         <div class="form-inputs">
            <label for="name">Age</label>
            <input type="number" id="age" name="age" v-model="input.age" placeholder="Age"
            value="22"  />
        </div>
         <div class="form-inputs">
            <label for="name">Gender</label>
             <select
                    id="gender"
                    v-model="input.gender"
                    name="gender"
                    >
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
        <button type="submit" >Submit</button>
    </form>
</template>

<script>
export default {
  name: 'form_validation',
  data() {
        return {
            input: {
                errors: [],
                fullname: null,
                email: null,
                age: null,
                gender: null
            }
        }
    },
    methods: {
        checkForm: function (e) {
            if (this.input.fullname && this.input.email && this.input.age && this.input.gender ) {
                return true;
            }

            this.input.errors = [];

            if (!this.input.fullname) {
                this.input.errors.push('Full name required.');
            }
            if (!this.input.email) {
                this.input.errors.push('Email required.');
            }
            if (!this.input.age) {
                this.input.errors.push('Age required.');
            }
            if (!this.input.gender) {
                this.input.errors.push('Gender required.');
            }

            e.preventDefault();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
