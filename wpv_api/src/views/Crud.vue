<template>


  <div id="postHolder" class="o5a">
    <table class="table">
      <tr 
        v-for="p in posts" 
        :key="p.id"
      >
        <td>{{p.id}}</td>
        <td> <a :href='p.slug'> {{p.title}} </a> </td>
        <td>
          {{p.status}}
        </td>
        <td>
          <button @click="deletePost(p, p.id)">X</button>
          <button @click="editPost(p)">E</button>
        </td>
      </tr>
    </table> 

    
    <button color="primary" @click="initialize">Reset</button>


    <hr>

  <div class="from" >
    <h4 class="headline">Add</h4>
    <input type="text" v-model="defaultItem.title" label="title" />
    <input type="text" v-model="defaultItem.content" label="content" />
 
    <select v-model="defaultItem.status.selectedValue">
        <option v-for="x in defaultItem.status.valuesList" :key="x" :value="x">
            {{x}}
        </option>
    </select>
    
    <hr/>

    <button @click="close">Cancel</button>
    <button @click="addPost()">Add Post</button>
  </div>




    <div class="from" >
      <h4 class="headline">Edit</h4>
      <input type="text" v-model="editedItem.title" label="title" />
      <input type="text" v-model="editedItem.content" label="content" />
 
      <select v-model="editedItem.status.selectedValue">
        <option v-for="x in editedItem.status.valuesList" :key="x" :value="x">
            {{x}}
        </option>
      </select>
      
      <hr/>

      <button @click="close">Cancel</button>
      <button @click="savePost(editedItem)">Save Post {{editedItem.id}}</button>
    </div>



  </div>

  <div v-if="loading" id="loader"> Loading... </div>
  <div v-else> Else </div>
  
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      
      dialog: false,
      loading: false,
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
        status: {
           selectedValue: 'draft',
           valuesList: ['draft', 'publish']
        }
      },
      defaultItem: {
        title: '',
        //id: 0,
        content: '',
        date: 0,
        status: {
           selectedValue: 'publish',
           valuesList: ['draft', 'publish']
        }
      },
      
      config:{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
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

      cleanStringFunc(value){
        return value.replace(/<\/?[^>]+(>|$)/g, "")
      },

      editPost (item) {
        console.log(item);
        this.editedIndex = this.posts.indexOf(item)
        this.editedItem = Object.assign({}, item)
       // this.dialog = true
      },

      async savePost(editedItem) {
        
        console.log("saving..." + this.loading)

        this.loading = true

        await axios.put(`wp/v2/posts/${editedItem.id}`, 
          { 
            title: editedItem.title, 
            content: editedItem.content
          }, 
            this.config
        ).then( res => {
          console.log( "saved" + this.loading, {res});
          this.loading = false
        });
      },


      async getPosts() {
          try {
                const entradasDB = await axios.get('wp/v2/posts', { timeout: 30000 } );
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
              });

          } catch (err) {
            console.log(err)
          }

        }
      },

      async addPost() {
        //this.posts = [];
        //await axios.post(`wp/v2/posts/${487}`).then(console.log("course"));
        //Would like to use the button to do this:        
          await axios.post('wp/v2/posts', {
              title: this.defaultItem.title,
              content: this.defaultItem.content,
              status: this.defaultItem.status.selectedValue
          }, this.config )
          .then(response => {
            console.log(response)
            this.posts.unshift(response.data) // Add new record on top of list.
          }) 
          .catch(err => {
            console.log(err)
          })
      }



    },
  }
</script>


<style scoped>

.o5 { opacity: 0.5;}

table.table tr td {
    border: 1px solid #ddd;
    padding: 2px 4px;
    font-size: 12px;
}

button { cursor: pointer; }
.table button {
    margin: 0 0 0px 0px;
    border: 0;
    cursor: pointer; 
}

.table button + button {
      margin-left: 5px;
  }

.show { display: block !important; }
div#loader {
    background: #00509496;
    position: fixed;
    top: auto;
    left: 2%;
    right: 2%;
    bottom: 2%;
    padding: 15px 20px;
    color: #fff;
    border-radius: 8px;
    display: inline-block;
    margin: 10px 0; 
}

</style>