<template>
    <div>
        <h4>E46 HttpPostRequest</h4>
        <div>{{title}}</div>

        <form @submit.prevent="createPost">
            <label>Title</label>
            <input type="text" id="title" v-model="formData.title" />

            <button type="submit">Submit</button>
        </form>

        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'e46',
    data() {
        return {
            title: "List of posts",
            formData: {
                title: ''
            }
        }
    },
    methods: {
        createPost() {
 
            axios.post("https://jsonplaceholder.typicode.com/posts", this.formData)
            .then( resp=> {
                console.log( resp )
                this.posts = resp.data
            }).catch(err => {
                console.log( err )
            })

        }
    }
}

</script>
