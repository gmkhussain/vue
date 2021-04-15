<template>
  <div id="postHolder" class="o5a">

    <table class="table">
      <tr 
        v-for="p in posts" 
        :key="p.id"
        >
        <td>{{p.id}}</td>
        <td>
            <a :href="'./blog/'+p.id">{{p.title}}</a>
        </td>
        <td>
          {{p.status}}
        </td>
      </tr>
    </table> 

  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      name: "Blog",
      posts: [],      
      config:{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
    }),

    created () {
      console.log( "Getting Post..." )
      this.getPosts()
    },

    methods: {

      cleanStringFunc(value){
        return value.replace(/<\/?[^>]+(>|$)/g, "")
      },


      async getPosts() {
          try {
                const entradasDB = await axios.get('wp/v2/posts');
                console.log(entradasDB)
                await entradasDB.data.forEach(element => {
                    const item = {}
                    item.id = element.id;
                    item.title = element.title.rendered;
                    item.content = this.cleanStringFunc(element.content.rendered);
                    // item.date = element.date;
                    item.status = element.status;
                    
                    this.posts.push(item);
                });
            } catch (error) {
              
              document.getElementById("postHolder").innerHTML = "Please check your SQL is runing?"
              
              console.log(error);
            }
            
      },

    

      

    },
  }
</script>


<style scoped>



</style>