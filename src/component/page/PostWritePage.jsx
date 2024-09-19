import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function PostWritePage() {
  
  const url = useNavigate();

  return(
    <div>
      <Button title='취소' onClick={() => url('/')} />
      <p>글 쓰기</p>
    </div>
  );
}

export default PostWritePage;