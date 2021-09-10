const cart = {
    state: {
        cartData: {
        products: [],
        totalPrice: 0,
        Quantities:0
        }
    },
    getter: { },
    mutations: { 
      addToCart: (state, payload) => {
        console.log("mutations running...")
        console.log("Mutation > State: ", state )
        console.log("Mutation > Payload: ", payload )
      }
    },
    actions: {
      addToCart: (obj, payload) => {
        
        console.log("Obj: ", obj)
        console.log("Payload: ", payload)
        console.log("actions...")

        obj.commit("addToCart", payload); // excute Mutations -> addToCart
        
      }
     }    
}

export default cart;

