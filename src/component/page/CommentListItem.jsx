import React from "react";

function CommentListItem(props) {
  const {comment} = props;
  return(
    <div>
      <span>{comment.content}</span>
    </div>
  );
}

export default CommentListItem;