import React from "react";
import classes from "./posts-grid.module.css";
import PostItem from "./PostItem";

const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

// into FeaturedPosts
export default PostsGrid;
