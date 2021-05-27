<template>
  <div>
    <h4>Computed Setter</h4>
    <p>Fullname: {{fullName}}</p>

    <button @click="changeFullname('Bob Tom')">change name</button>

  </div>
</template>

<script>
export default {
    name: 'e26',
    data() {
        return { 
            fname: "Alex",
            lname: "Deo",
        }
    },
    methods: {
        changeFullname(new_name){
            this.fullName = new_name;
        }
     },
    computed: {  
        fullName: {
            get() {
                return `${this.fname} ${this.lname}`;
            },
            set(x) {
                let fn = x.split(' ');
                this.fname = fn[0];
                this.lname = fn[1];
            }
        }
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>
