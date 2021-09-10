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
      addToCart() {
        console.log("mutations...")
      }
    },
    actions: {
      addToCart(obj, payload) {
          console.log("Obj: ", obj)
          console.log("Payload: ", payload)
        console.log("actions...")
      }
     }    
}

export default cart;

