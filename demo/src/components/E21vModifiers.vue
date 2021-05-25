<template>
  <div>
    <h4>Modifiers</h4> 
    
    <pre>
        {{ JSON.stringify(formValues, null, 2) }}
    </pre>

    <form @submit="submitForm">
        <div>
            <label for="name">Name</label>
            <!--Trim: extra space will not allow-->
            <input type="text" id="name" v-model.trim="formValues.name" />
        </div>

        <div>
            <label for="age">Age</label>
            <input type="number" id="age" v-model.number="formValues.age" />
        </div>

        <div>
            <label for="age">Desc (Lazy Modifier)</label>
            <input type="text" id="age" v-model.lazy="formValues.desc" />
        </div>

    </form>
  </div>
</template>

<script>
export default {
    name: 'e21',
    data() {
        return { 
            formValues: {
                name: '',
                age: null,
                desc: '',
            }
        }
    },
    methods: {  
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>
