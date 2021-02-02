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
















## Declarative Rendering

### v-bind:title

```js
<span v-bind:title="tooltip">Hover Me</span>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tooltip:  'Tooltip text'
    }
  }
}
</script>
```




















### Loops

```js
<table>
  <tr v-for="user in users">
    <td> {{ user.id }} </td>
    <td> {{ user.name }} </td>
    <td> {{ user.city }} </td>
  </tr>
</table>



<script>
export default {
  name: 'Home',
  data () {
    return {
      users: [
        { id: '001', name: "Amoos", city: "Paris" },
        { id: '002', name: "Billy", city: "London" },
        { id: '003', name: "Cody", city: "Barlin" },
        { id: '004', name: "Danny", city: "Venus" }
      ]
    }
  }
}
</script>
```

















## if else condition

```js
<template>

  <div class="main">
    <div v-if="name">
      <span v-text="name"> -> Condition True</span>
    </div>
    <div v-else>
      Name not founded - > Condition False
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: "Amoos",
      msg: 'Welcome to WebApp'
    }
  }
}
</script>
```






## Loops and push data in loop

```js
<script>
export default {
  name: 'Home',
  data () {
    return {
      name: "Amoos",
      msg: 'Welcome to WebApp',
      tooltip:  'Tooltip text',
      users: [
        { id: '001', name: "Amoos", city: "Paris" },
        { id: '002', name: "Billy", city: "London" },
        { id: '003', name: "Cody", city: "Barlin" },
        { id: '004', name: "Danny", city: "Venus" }
      ]
    }
  },
  methods: {
    addUser: function () {
      this.users.push({ id: '005', name: "Eddy", city: "NY" })
    }
  }
}
</script>
```








## v-model
The v-model directive that makes two-way binding between form input and app.

```js
<div id="app">
  <p>{{ inputtext }}</p>
  <input v-model="inputtext">
</div>



// home.vue
export default {
  name: 'Home',
  data () {
    return {
      inputtext: 'Change my text',
    }
  }
}
```


















## instance

```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})
```


















































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














## Difference between using <router-link> and <a>
<router-link> is intended for in-app links (e.g., to a page within your app). Use <a> for external links.

Take a look at <router-link> and <router-view>. This is how your application will handle routing. If you chose to have the router built-in using the CLI, you already have a nice template here to use!





## Redirect
We can add redirects from one route to another by adding the redirect property to a route.

``` { path: "/dashboard", name: "Dashboard", component: DashboardScreen, redirect: to => "/home" }, ```





## Alias
A redirect means that when a user visits ```/foo``` then the URL will be replaced by ```/bar``` and then matched as ```/bar```.
An alias means of ```/foo``` that’s set as ```/bar``` means that when the user visits ```/bar``` , the URL remains ```/bar```, but it’ll be matched as if the user is visiting ```/foo``` .

```js 
{ path: '/home', name: 'Home', component: HomeScreen, alias: ['/index', '/home-alias'] },
{ path: '/login', name: 'Login', component: LoginScreen, alias: 'login-alias',
  children: [
    { path: 'login-child', component: LoginScreen } //login/login-child
  ]
},
```














## How to get data from child to parent in Vuejs?

## $emit
You can use ```$emit``` method for this purpose.
v-on directive captures the child components events that is emitted by ```$emit```


```js
// Child component triggers clicked event :
export default {
   methods: {
     onClickButton (event) {
         this.$emit('clicked', 'someValue')
     }
   }
}
```


```html
// Parent component receive clicked event:
<div>
    <child @clicked="onClickChild"></child>
</div>
```

```js
export default {
  methods: {
      onClickChild (value) {
          console.log(value) // someValue
      }
  }
}
```






## $.emit more options
```js
this.$emit('clicked', 'someValue', 'someOtherValue');
```

```js
//you can also pass an object
this.$emit('clicked', {someValue, otherValue});
```

```js
// and handle it as
onClicked ({someValue, otherValue}) {
  console.log(someValue, otherValue);
}
```

or

```js
onClicked (payload) {
  const {someValue, otherValue} = payload;
  console.log(someValue, otherValue);
}
```




```html
you can pass arguments, and second value will be data from child component:

<div v-for="(element, index) in myArray">
  <child @clicked="onClickChild(index, ...arguments)"></child>
</div>
```



### FAQ
<product :premium=“premium” @add-to-cart=“updateCart” @remove-from-cart=“removeFromCart”>

Can I add two functions to two events in a component? I have two buttons with two event emitters in the child component.

How can I listen to those event emitters in the parent(root) component? Can I do it with the piece of code above? I’m new to vue, any help is much appreciated!



