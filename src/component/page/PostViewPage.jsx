import {useParams} from 'react-router-dom';
import Button from '../ui/Button';
import data from '../../data.json';
import TitleText from './TitleText';
import ContentText from './ContentText';
import { useNavigate } from 'react-router-dom';
import CommentList from './CommentList'

function PostViewPage() {
  const {postId} = useParams();
  const url = useNavigate();
  const post = data.find(
    (item) => {return item.id == postId;}
  );
  return (
    <div>
      <div><Button title="뒤로가기" onClick={() => url("/")}/></div>
      <div>
        <TitleText>{post.title}</TitleText>
        <ContentText>{post.content}</ContentText>
      </div>
      <div>
        댓글 목록
        <CommentList comments={post.comments} />
      </div>
    </div>
  );
};

export default PostViewPage;