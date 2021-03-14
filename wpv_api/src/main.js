import { createApp } from "vue";
import App from "./App.vue";
//import VueAxios from "vue-axios";
import axios from "axios";
import router from "./router"


// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:80/nombre-proyecto/';


//createApp(App).use( router, VueAxios, axios).mount("#app");
createApp(App).use( router, axios).mount("#app");



