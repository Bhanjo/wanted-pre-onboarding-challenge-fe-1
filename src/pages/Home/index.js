import ContentContainer from '../../componenets/ContentContainer';
import { Link } from 'react-router-dom';
import * as Style from './styles';

const Home = () => {
  return (
    <ContentContainer>
      <Style.LinkContainer>
        <Link to='/todo'>Todo</Link>
        <Link to='/auth/sign-in'>로그인</Link>
        <Link to='/auth/sign-up'>회원가입</Link>
      </Style.LinkContainer>
    </ContentContainer>
  );
};

export default Home;
