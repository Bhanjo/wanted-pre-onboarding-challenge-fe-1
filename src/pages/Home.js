import Axios from '../lib/axsios';
import styled from 'styled-components';

// 로그인이 안되어 있다면 로그인 페이지로 이동 기능 구현 필요
const Home = () => {
  // todo 패치 예시
  const fetchTest = async () => {
    const data = await Axios.get('/todos');
    console.log(data);
  };

  return (
    <Container>
      <TodoContainer>어서오세요!</TodoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: skyblue;
`;

const TodoContainer = styled.div`
  min-width: 400px;
  min-height: 500px;
  background-color: blue;
`;

export default Home;
