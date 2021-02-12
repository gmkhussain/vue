<template>

    <form
        id="app"
        @change="checkForm"
        action="https://vuejs.org/"
        method="post"
        novalidate="true"
        >

        <p v-if="inputs.errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in inputs.errors">{{ error }}</li>
            </ul>
        </p>

        <p>
            <input
                v-model.number="inputs.coffee"
                type="number"
                name="coffee"
                > Coffee <br/>
            <input
                v-model.number="inputs.water"
                type="number"
                name="water"
                > Water <br/>
            <input
                v-model.number="inputs.burger"
                type="number"
                name="burger"
                > Burger <br/>
        </p>

        <p>
            Current Total: {{total}}
        </p>

        <p>
            <input type="submit" value="Submit">
        </p>

    </form>

</template>

<script>
export default {
  name: 'custom_validation',
  data() {
        return {
            inputs: {
                errors: [],
                coffee: null,
                water: null,
                burger: null, 
            }
        }
    },
    computed: {
        total: function () {
        // must parse because Vue turns empty value to string
        return  Number(this.inputs.coffee) +
                Number(this.inputs.water+this.inputs.burger);
        }
    },
    methods:{
        checkForm: function (e) {
        this.inputs.errors = [];

        if (this.total <= 100) {
            this.inputs.errors.push('Total must greater than 100!');
        } 
        
        if (this.total >= 100) {
           this.inputs.errors.push('GOOD!');
        }

        if (!this.inputs.errors.length) {
            return true;
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
