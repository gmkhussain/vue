import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBH3IAx3zSTxt0W9Iird51VaVwnsW5V-Rk",
    authDomain: "prj1-a58c8.firebaseapp.com",
    projectId: "prj1-a58c8",
    storageBucket: "prj1-a58c8.appspot.com",
    messagingSenderId: "340429328897",
    appId: "1:340429328897:web:28a41851ceb1295d0fa600",
    measurementId: "G-YQ4PY6X06C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

createApp(App).use(router).mount('#app')
