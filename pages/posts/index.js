import Head from "next/head";

import React, { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";

import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming blogs" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
