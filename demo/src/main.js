
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"

// createApp(App).mount('#app') // Before route
createApp(App).use( router ).mount('#app')
