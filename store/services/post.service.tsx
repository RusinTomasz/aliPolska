import axios from "axios";

export const fetchPosts = async () => {
  const posts = await axios("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return posts;
};
