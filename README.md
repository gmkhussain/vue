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

```
vue init webpack 
vue init webpack-simple 
vue init browserify 
vue init browserify-simple 
vue init simple
```