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
        {{ cartTotal }}
    </div>

  </div>
</template>

<script>
export default {
    name: 'e23',
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
            ]
        }
    },
    computed: {  
        fullName() {
            return `${this.fname} ${this.lname}`;
        },
        cartTotal() {
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
