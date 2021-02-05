<template>
  <div v-if="currentPost" class="edit-form">
    <h4>PostDetail</h4>

    <table border="0" cellpadding="10">
      <tr>
        <td>{{currentPost.id}}</td>
        <td>{{currentPost.date}}</td>
        <td>{{currentPost.title}}</td>
      </tr>
    </table>

  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "postdetail",
  data() {
    return {
      currentPost: null,
      message: ''
    };
  },
  methods: {
    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
  },
  mounted() {
    this.message = '';
    this.getPost(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>