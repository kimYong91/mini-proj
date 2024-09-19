import PostListItem from "./PostListItem";
import "../css/PostList.css"

function PostList(props) {

  const {posts, onClickItem} = props;

  return(
    <div className="postList">
      {posts.map((post) => {
        return <PostListItem key={post.id} post={post} onClick={() => onClickItem(post)}/>
      })}
    </div>
  );
}

export default PostList;