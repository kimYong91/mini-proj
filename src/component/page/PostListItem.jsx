import React from "react";

function PostListItem(props) {
  const {post, onClick} = props;
  return(
    <div onClick={onClick}>
      <span>{post.title}</span>
    </div>
  );
}

export default PostListItem;