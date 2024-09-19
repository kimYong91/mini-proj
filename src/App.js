import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./component/page/IndexPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
