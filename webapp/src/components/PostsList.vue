<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">

      <h4>Post List</h4>

       <table border="0" cellspacing="10">
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Categories</th>
              <th>wp:attachment</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(post, index) in posts"
                :key="index">
              <td>{{ post.id }}</td>
              <td>{{ post.date }}</td>
              <td><a :href="`posts/${post.id}`">{{ post.title }}</a></td>
              <td>{{ post.slug }}</td>
              <td>{{ post.categories }}</td>
              <td>{{ post.attachment }}</td>
              <td>{{ post.status }}</td>
              <td>
                <button>D</button>
                <button>E</button>
              </td>
            </tr>
          </tbody>
        </table>
        
    </div>

  </div>
</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "posts-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    searchTitle() {
      PostDataService.findByTitle(this.title)
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  mounted() {
    this.retrievePosts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>