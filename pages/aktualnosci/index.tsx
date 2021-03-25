import Head from "next/head";

//Services
import { fetchPosts } from "../../store/services/post.service";

//Redux
import { wrapper } from "../../store/store";
import * as postActions from "../../store/actions/postActions";

//Styles
import PageTitle from "../../app/styles/shared/pageTitle/PageTitle";
import Container from "../../app/styles/shared/Container";

//Types
import Post from "../../app/types/Post";

//Components
import PostsList from "../../app/components/post/PostsList";

interface BlogProps {
  posts: Post[];
}

const Blog = (props: BlogProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <PageTitle>Najnowsze aktualności</PageTitle>
        <PostsList posts={props.posts}></PostsList>
      </Container>
    </>
  );
};

export default Blog;

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const posts: Post[] = await fetchPosts();

  store.dispatch<any>(postActions.setPosts(posts));

  return {
    props: { posts },
  };
});
