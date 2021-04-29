import React from "react";
import classes from "./all-posts.module.css";
import PostsGrid from "./PostsGrid";

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>

      <PostsGrid posts={props.posts} />
    </section>
  );
};

// into AllPostsPage
export default AllPosts;
