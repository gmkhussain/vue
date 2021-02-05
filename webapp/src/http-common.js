import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/projects/wordpress/wpv/wp-json/wp/v2/",
  headers: {
    "Content-type": "application/json"
  }
});

