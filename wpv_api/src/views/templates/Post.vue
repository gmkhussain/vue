<template>
  <div id="postHolder" class="o5a">

    {{name}}

    <div v-if="currentPost" class="table">
      
      <p>{{currentPost.title}}</p>
      
      <p>{{currentPost.id}}</p>

      
    </div> 
    <div  v-else> Nai</div>

  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      name: "Post",
      currentPost: {},    
      config:{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
    }),

    created () {
      console.log( "Getting Post..." )
      this.getSinglePost(this.$route.params.id);
    },

    methods: {

      cleanStringFunc(value){
        return value.replace(/<\/?[^>]+(>|$)/g, "")
      },


      async getSinglePost(id) {
          try {
                const postData = await axios.get('wp/v2/posts/'+id);
                console.log(postData)
              
                const   post = {}
                        post.id = postData.data.id;
                        post.title = postData.data.title;
                        post.content = postData.data.content;
                        post.status = postData.data.status;
                    
                                 
                this.currentPost = post;
                console.log(this.currentPost)   
               
            } catch (error) {
              
              console.log(error);
              document.getElementById("postHolder").innerHTML = "Please check your SQL is runing?"

            }
            
      }, 
    },


    
  }
</script>


<style scoped>



</style>