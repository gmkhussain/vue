<template>
  <div id="postHolder">
  <table :class="elevation-1">
    <tr 
      v-for="p in posts" 
      :key="p.id"
    >
      <td>{{p.id}}</td>
      <td> <a :href=' p.slug '> {{p.title}} </a> </td>
      <td>
        
      <button @click="deletePost(p)">
        mdi-delete
      </button>

      </td>

    </tr>
  </table> 
    <button color="primary" @click="initialize">Reset</button>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'title',
        },
        { text: 'id', value: 'id' },
        { text: 'content (g)', value: 'content' },
        { text: 'date (g)', value: 'date' },
        { text: 'status (g)', value: 'status' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      posts: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        id: 0,
        content: '',
        date: 0,
        status: 0,
      },
      defaultItem: {
        title: '',
        id: 0,
        content: '',
        date: 0,
        status: 0,
      },
      config:{
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dvcmRwcmVzcy1hcGlcL3dvcmRwcmVzcy0xXC93b3JkcHJlc3MiLCJpYXQiOjE1NzIyNzQ4NzgsIm5iZiI6MTU3MjI3NDg3OCwiZXhwIjoxNTcyODc5Njc4LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.7eG3MIBl6ITJ26xEfNJDpnwykdpiNXoxaP_zC-9qhxk'
        }
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      console.log( "Getting Post..." )
      this.getPosts()
    },

    methods: {
      async initialize () {
        console.log("initialize... optional function")
      },
      async getPosts() {
          try {
                const entradasDB = await axios.get('wp-json/wp/v2/posts');
                console.log(entradasDB)
                await entradasDB.data.forEach(element => {
                    const item = {}
                    item.id = element.id;
                    // item.title = element.title.rendered;
                    // item.content = this.limpiar(element.content.rendered);
                    // item.date = element.date;
                    // item.status = element.status;
                    
                    this.posts.push(item);
                });
            } catch (error) {
              
              document.getElementById("postHolder").innerHTML = "Please check your SQL is runing?"
              
              console.log(error);
            }

          /*
          let uri = '/wp-json/wp/v2/posts'; // Base URL Defined in `main.js`
          axios.get(uri).then((response) => {
            //console.log(response.data[0].date);
            return response;

          }).then(
              (data) => {
                
                this.posts = data.data;
                console.log( this.posts )
              }
          );
        //    return dd;
        */
      },
       async deletePost (item) {
        const index = this.posts.indexOf(item)
        const respuesta = confirm('Are you sure you want to delete this item?') && this.posts.splice(index, 1)
        if(respuesta){
            try {
                await this.axios.delete(`wp-json/wp/v2/posts/${item.id}`, this.config)
            } catch (error) {
                console.log(error);
            }
        }
      }
      
    },
  }
</script>