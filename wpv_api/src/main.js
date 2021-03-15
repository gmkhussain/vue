import { createApp } from "vue";
import App from "./App.vue";
//import VueAxios from "vue-axios";
import axios from "axios";
import router from "./router"


// Default Base URL
// http://localhost/projects/wordpress_api
axios.defaults.baseURL = 'http://localhost/projects/wordpress/wpv/';


//createApp(App).use( router, VueAxios, axios).mount("#app");
createApp(App).use( router, axios).mount("#app");



