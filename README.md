# <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" style="position: relative; top: 5px;" height="80" /> VueJS

## VueJS with  Laravel 5
* install laravel project on localhost
* open project folder


## How to setup VueJS with Laravel
* open command line and type <code>php artisan preset vue</code>
* Open file <code>package.json</code> and check..
<b>package.json</b>
```
//Output of -> php artisan preset vue
...
    "devDependencies": {
        ...
        "vue": "^2.5.7"
    }
...
```


* open command line and type <code>php artisan preset bootstrap</code>
```
//Output of -> php artisan preset bootstrap
...
    "devDependencies": {
        ...
		"bootstrap-sass": "^3.3.7",
		...
        "vue": "^2.5.7"
    }
...
```

* <code>npm install</code>
* open <code>myLaravelProjectFolder\resources\views\welcome.blade.php</code> and type this code with script tag <code>src="{{ asset("js/app.js") }}"</code>
* open app.js from <code>myLaravelProjectFolder\resources\assets\js\app.js</code>
* After coding you need to run webpack command <code>npm install dev</code>




## How to Webpack automatically recompile modified assets
Type this command in your terminal <code>npm run watch</code>




## Uncaught ReferenceError: Vue is not defined
Make sure vue.js file added 
```javascript
<script src="https://unpkg.com/vue@2.4.2"></script>
```




## Pass array / JSON data to Laravel view and using VueJS

#### views/welcome.blade.php
```html
<example-component></example-component>
```

#### assets/js/components/ExampleComponent.vue
```javascript
<template>
    <div class="demo-example" >
        type: {{ 2+4 }}
        <hr/>

        <table border=1>
            <tr  v-for="item in groceryList">
                <td>{{ item.id }}</td>
                <td>{{ item.text }}</td>
            </tr>
        </table>
        
      
    </div>
</template>

<script>
export default {
  data () {
    return {
    
      groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]

    }
  }
}

</script>

<style>
.demo-example {
  color: blue;
}
</style>
```


























## Vue-CLI

```npm install -g vue-cli```
Note: ```-g``` refer to global

The different ways of initializing an application are as follows: 

```js
vue init webpack 
vue init webpack-simple 
vue init browserify 
vue init browserify-simple 
vue init simple
```


## vue init webpack
This command will inital Vue Project
Some question will ask just answer all of them.

```js
? Generate project in current directory? Yes
? Project name webapp
? Project description A Vue.js project
? Author hussain
? Vue build standalone      
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm
```

Once you done run this command

```npm run dev```

Now open in ```http://localhost:8080``` on browser. 
















## How to disable eslint on vue-cli ?
Add this line top of your script where you want ignore eslint
```/* eslint-disable */```





















## Routing


```js
// router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/components/home'
import LoginScreen from '@/components/login'
import DashboardScreen from '@/components/dashboard'
import NotFoundComponent from '@/components/not_found'

Vue.use(Router)

 let routes = [
    { path: '/home', name: 'Home', component: HomeScreen },
    { path: '/login', name: 'Login', component: LoginScreen },
    
    { path: "/dashboard", name: "Dashboard", component: DashboardScreen },
    { path: "/dashboard/:id", name: "Dashboard", component: DashboardScreen }, //domain/contact/myId-7

    { path: '*', component: NotFoundComponent }
  ]


  const router = new Router({
    mode: "history",
    routes
  })


  export default router;
```






```js
// App.vue

<template>
  <div id="app">
    <NavMain />
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import NavMain from '@/components/nav_main'

export default {
  name: 'App',
  mounted() {
   //router.push( )
   //router.push({ path: 'contact', query: { s: '123' }})
  },
  components: {
    'NavMain': NavMain
  }
}
</script>
```











Note:
### Vue component not mounting or rendering and no error messages


Browsers don't support self-closing tags like these:

```html
<home />
<login />
```
Try having explicit closing tags instead:

```html
<home></home>
<login></login>
```