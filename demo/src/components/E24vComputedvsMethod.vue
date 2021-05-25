<template>
  <div>
    <h4>Computed Property</h4>
    <div>
        Fullname: {{fname}} {{lname}}
    </div>

    <div>
        Computed Fullname: {{ fullName }}
    </div>

    <hr/>

    <button @click='items.push({id:4, title: "mouse", price:50})'>Add new</button>

    <div>
       Computed total: {{ cartTotal }}
       Note: computed property cached
    </div>

    <div>
        Method total: {{ methodTotal() }}
    </div>

    <label for="address">Address</label>
    <input type="text" name="address" id="address" v-model="address" />

  </div>
</template>

<script>
export default {
    name: 'e24',
    data() {
        return { 
            fname: "Alex",
            lname: "Deo",
            items: [
                {
                    id: 1,
                    title: "TV",
                    price: 100
                },
                {
                    id: 2,
                    title: "Phone",
                    price: 200
                },
                {
                    id: 3,
                    title: "Laptop",
                    price: 300
                }
            ],
            address: ''
        }
    },
    methods: {
        methodTotal() {
            console.log("Called Method")
            return this.items.reduce((total, curr) => ( total = total + curr.price), 0 )
        }
    },
    computed: {  
        fullName() {
            return `${this.fname} ${this.lname}`;
        },
        cartTotal() {
            console.log("Called Computed")
            return this.items.reduce((total, curr) => ( total = total + curr.price), 0 )
        }
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>
