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















## Created

```js
export default {
  name: 'Home',
  created() {
    /*
     * created hook can be used to run code after an instance is created
     */
    console.log("Created")
  },
```

Note: Don’t use arrow functions on an options property or callback, such as created: () => console.log(this.a) or vm.$watch('a', newValue => this.myMethod()). Since an arrow function doesn’t have a this, this will be treated as any other variable and lexically looked up through parent scopes until found, often resulting in errors such as Uncaught TypeError: Cannot read property of undefined or Uncaught TypeError: this.myMethod is not a function.











## Mounted() Explained

Mounting takes place at the Virtual Dom Level, before the User sees anything.

What is mounting in vue? In vue, every instance is first stored as Virtual DOM objects(virtual html elements) in memory.When Vue create those components(virtual DOM)visible to the real DOM(Actual html elements) , the moment in which it create virtual DOM into real DOM is call 'Mounting

As the app state changes , vue detect changes user expect to see and put data changes to the real DOM from the memory.That is called an 'update'. The entire process is called Vue Lifescyclehooks which has four stages, namely create,mount,update and destroyed.























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









## Initialize Axios for Vue.js 2 CRUD HTTP Client

```npm install axios```

Then, under src folder, we create ```http-common.js``` file like this:


```js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
```












## Create Data Service

Our service will use axios from HTTP client above to send HTTP requests.
```services/TutorialDataService.js```

```js
import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
```






















### Tutorial.vue

```js
<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentTutorial.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentTutorial.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
```




### AddTutorial.vue

```js
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
```




### TutorialsList.vue

```js
<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/tutorials/' + currentTutorial.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
```



















## Configure Port for Vue.js 2 CRUD App
Because most of HTTP Server use CORS configuration that accepts resource sharing retricted to some sites or ports, so we also need to configure port for our App.

In project root folder, create vue.config.js file with following content:

```js
module.exports = {
  devServer: {
    port: 8081
  }
}
```




## WPJson Urls
https://example.com/wp-json/wp/v2/posts
https://example.com/wp-json/wp/v2/posts?_fields=id,link


Currently we have to fetch all available items with paging, like:
https://example.comwp-json/wp/v2/posts?_fields=slug&per_page=100&page=1
https://example.comwp-json/wp/v2/posts?_fields=slug&per_page=100&page=2






## Concatenate variable and text in Vuejs

```html
<a :href="`posts/${post.id}`">{{ post.title }}</a>
```












## Watch: mode to detect changes

```
<template>
   <div class="input">
      <p>{{inputtext}}</p>
      <input type="text" v-model="inputtext" />
      <button v-on:click="inputtext = 'baz'">Change it to baz</button>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      inputtext: 'Change my text',  
    }
  },
  watch: { 
    inputtext: function(newVal, oldVal) {
      console.log('New value: ', newVal, ' | Old value: ', oldVal)
    }
  },
}
</script>
```


















## How to get query parameters from a URL in VueJs

```js
<template>
//...
    <router-link to="/home?test=somthing">Home?test=somthing</router-link>
//...
</template>


<script>
//...
created() {
  console.log(this.$route.query.test)
}
//...
</script>
```













## How to enable / disable input on click in VueJS

```js
<template>
    <button @click="num1 = (num1 + 1) % 2">Toggle Enable/Disabled</button>
    <input type="text" :disabled="num1 == 1">
      
    <pre>{{ $data }}</pre>
</template>


<script>
export default {
  name: 'Home',
  data () {
    return {
	    num1: 1,
  },
}
</script>
```