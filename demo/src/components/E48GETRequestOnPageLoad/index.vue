<template>
    <div>
        <h4>E48GETRequestOnPageLoad</h4>
        <div>{{title}}</div>
        
        <h4 v-if="errMsg">{{errMsg}}</h4>
        <table border="1">
            <tr v-for="post in posts" :key="post.id">
                <td> {{post.id}} </td>
                <td> {{post.title}} </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'e48',
    data() {
        return {
            title: "List of posts",
            posts: [],
            errMsg: ''
        }
    },
    created() {
      this.getPosts()  
    },
    methods: {
        getPosts() {
            axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=4")
            .then( resp=> {
                console.log( resp )
                this.posts = resp.data
            }).catch(err => {
                console.log( err )
                this.errMsg = "Failed to fetch data, try again."
            })
        }
    }
}

</script>
