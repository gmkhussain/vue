<template>
  <div>
  <table :class="elevation-1">
    <tr>
      <td>a</td>
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
      entradas: [],
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
      console.log( "data.config" )
      this.getContacts()
    },

    methods: {
      async initialize () {
        console.log("ddd")
      },
      getContacts() {
          let uri = 'http://localhost/projects/wordpress_api/wp-json/wp/v2/posts';
          axios.get(uri).then((response) => {
              console.log(response);
          });
      //    return dd;
      }
      
    },
  }
</script>