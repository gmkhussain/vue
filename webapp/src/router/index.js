import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/components/home'
import LoginScreen from '@/components/login'
import DashboardScreen from '@/components/dashboard'
import NotFoundComponent from '@/components/not_found'

Vue.use(Router)

 let routes = [
    { path: '/home', name: 'Home', component: HomeScreen, alias: ['/baz', '/home-alias'] },
    { path: '/login', name: 'Login', component: LoginScreen, alias: 'login-alias',
      children: [
        { path: 'login-child', component: LoginScreen } //login/login-child
      ]
    },    
    { path: "/dashboard", name: "Dashboard", component: DashboardScreen }, 
    { path: "/dashboard/:id", name: "Dashboard", component: DashboardScreen }, //domain/contact/myId-7

    { path: '*', component: NotFoundComponent }
  ]


  const router = new Router({
    mode: "history",
    routes
  })


  export default router;