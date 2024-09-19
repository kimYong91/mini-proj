import React from "react";
import Button from "../ui/Button";
import PostList from "./PostList";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";

function IndexPage() {

  const url = useNavigate();

  return(
    <div>
      <Button title='글 쓰기' onClick={() => url('/post-write')}/>
      <p>페이지 리스트</p>
      <PostList posts={data} onClickItem={
        (item) => {url(`/post/${item.id}`)}
      }/>
    </div>
  );
}

export default IndexPage;