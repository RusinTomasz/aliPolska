import Head from "next/head";
import { wrapper } from "../../store/store";
import * as postActions from "../../store/actions/postActions";
import { fetchPost } from "../../store/services/post.service";
import Link from "next/link";

const Post = ({ post }): JSX.Element => {
  const { title } = post[0];

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <h1>Post</h1>
      {title}
      <Link href="/">FrontPage</Link>
    </>
  );
};

export default Post;

export const getStaticProps = wrapper.getStaticProps(async ({ params }) => {
  const post = await fetchPost(params.slug);

  console.log(params.slug);

  return {
    props: { post },
  };
});

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
