<template>
    <div>
        <h4>E45 HttpGetRequest</h4>
        <div>{{title}}</div>
        <button v-on:click=getPosts>Get Post</button>

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
    name: 'e45',
    data() {
        return {
            title: "List of posts",
            posts: [],
            errMsg: ''
        }
    },
    methods: {
        getPosts() {
 
            axios.get("https://jsonplaceholder.typicode.com/posts")
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
