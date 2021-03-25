import Head from "next/head";
import { wrapper } from "../../store/store";
import * as postActions from "../../store/actions/postActions";
import { fetchPosts } from "../../store/services/post.service";
import Link from "next/link";
import PageTitle from "../../app/styles/shared/pageTitle/PageTitle";

const Blog = (props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <PageTitle>Najnowsze aktualności</PageTitle>
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
