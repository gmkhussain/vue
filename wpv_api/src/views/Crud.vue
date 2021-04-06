<template>
  <div id="postHolder">
  <table class="elevation">
    <tr 
      v-for="p in posts" 
      :key="p.id"
    >
      <td>{{p.id}}</td>
      <td> <a :href=' p.slug '> {{p.title}} </a> </td>
      <td>
        
      <button @click="deletePost(p, p.id)">
        mdi-delete {{p.id}}
      </button>

      <button @click="editPost(p)">E {{p.id}}</button>

      </td>

    </tr>
  </table> 
    <button color="primary" @click="initialize">Reset</button>


    <hr>

  <div class="from">
    <span class="headline">{{ formTitle }}</span>
    <input type="text" v-model="editedItem.title" label="title" />
    <input type="text" v-model="editedItem.content" label="content" />

    <hr/>

    <button @click="close">Cancel</button>
    <button @click="save">Save</button>
  </div>


  



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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3Byb2plY3RzXC93b3JkcHJlc3NcL3dwdiIsImlhdCI6MTYxNzM3NjgwMywibmJmIjoxNjE3Mzc2ODAzLCJleHAiOjE2MTc5ODE2MDMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.LNwTaITzTsQ2KPDdei8LQFKPMwbFpKLvWh7GESWPyHs'
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

      limpiar(value){
        return value.replace(/<\/?[^>]+(>|$)/g, "")
      },

      editPost (item) {
        this.editedIndex = this.posts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },


      async getPosts() {
          try {
                const entradasDB = await axios.get('wp/v2/posts');
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

  
  





      async deletePost(result, id) {

        const index = this.posts.indexOf(result)
        
        console.log(result)
        console.log(index)

        const deleteConfirm = confirm('Are you sure you want to delete this item?') && this.posts.splice(index, 1)
        
        if(deleteConfirm){ 
          try {
            await axios.delete('wp/v2/posts/'+id, this.config )         
                .then(response => {
                console.log(this.result);
                console.log(response)
              })
          } catch (err) {
            console.log(err)
          }

        }
      },
      



    },
  }
</script>