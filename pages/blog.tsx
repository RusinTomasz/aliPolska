import Head from "next/head";
import { useSelector } from "react-redux";
import { postsSelectors } from "../store/selectors";
import { wrapper } from "../store/store";
import * as postActions from "../store/actions/postActions";
import axios from "axios";
import { fetchPosts } from "../store/services/post.service";

const Blog = (props): JSX.Element => {
  const posts = useSelector((state) => postsSelectors.getPosts(state));

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <div>
        {props.posts &&
          props.posts.map((post) => <div key={post.id}>{post.title}</div>)}
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const posts = await fetchPosts();

  store.dispatch<any>(postActions.setPosts(posts));

  return {
    props: { posts },
  };
});
