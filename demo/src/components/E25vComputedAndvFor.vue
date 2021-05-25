<template>
  <div>
    <h4>Computed Property and vFor</h4>
    <button> > 100</button>


    <div v-for="(item, index) in items" :key="item">
        <div v-if="item.price > 100">
            <p>{{index}} | {{item.title}} | {{item.price}}</p>
        </div>
    </div>

    <div v-for="x in expensiveItems(100)" :key="x">
        {{x.price}}
    </div>


    <hr />
  </div>
</template>

<script>
export default {
    name: 'e25',
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
        },
        expensiveItems() {
            console.log("expensive")
            return this.items.filter(function( item ) {  return item.price > 200; });
        }
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>
