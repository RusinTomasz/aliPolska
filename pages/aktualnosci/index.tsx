import Head from "next/head";
import { useSelector } from "react-redux";
import { postsSelectors } from "../../store/selectors";
import { wrapper } from "../../store/store";
import * as postActions from "../../store/actions/postActions";
import { fetchPosts } from "../../store/services/post.service";
import Link from "next/link";

const Blog = (props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <Link href="/">FrontPage</Link>
      <div>
        {props.posts &&
          props.posts.map((post) => (
            <div key={post.id}>
              <h2>{post.Title}</h2>
            </div>
          ))}
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
