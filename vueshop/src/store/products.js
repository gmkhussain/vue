const products = {
    state: {
        products: [
            {id: 1, name: 'Apple AirPods with Charging Case (Wired)', image: '1.jpg', price: 50, quantity: 1},
            {id: 2, name: 'Nintendo Switch - Animal Crossing: New Horizons Edition - Switch', image: '2.jpg', price: 100, quantity: 1},
            {id: 3, name: 'AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack', image: '3.jpg', price: 80, quantity: 1},
            {id: 4, name: 'Roku Express HD Streaming Media Player', image: '4.jpg', price: 60, quantity: 1},
            {id: 5, name: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black', image: '5.webp', price: 120, quantity: 1},
            {id: 6, name: 'Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls', image: '6.webp', price: 160, quantity: 1},
            {id: 7, name: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver', image: '7.webp', price: 200, quantity: 1},
            {id: 8, name: 'DJI Mavic Mini Combo - Drone FlyCam Quadcopter UAV with 2.7K Camera 3-Axis Gimbal GPS 30min Flight Time, less than 0.55lbs, Gray', image: '8.webp', price: 300, quantity: 1},
            {id: 9, name: 'HP 63 | Ink Cartridge | Black | F6U62AN', image: '9.webp', price: 400, quantity: 1},
            {id: 10, name: 'Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included)', image: '10.webp', price: 340, quantity: 1},
            
        ]
    },
    getters: {
        getProducts: (state) => {
            return state.products;
        }
    },
    mutations: {},
    actions: {},
  }
  export default products;