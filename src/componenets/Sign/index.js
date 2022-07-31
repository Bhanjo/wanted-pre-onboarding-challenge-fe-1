import styled from 'styled-components';
import ContentContainer from '../ContentContainer';

// 회원가입, 로그인을 위한 컴포넌트입니다.
const Sign = ({ title, children }) => {
  return (
    <ContentContainer>
      <Wrap>
        <Title>{title}</Title>
        {children}
      </Wrap>
    </ContentContainer>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 450px;
  height: 600px;
  background-color: #fff;
  border: 1px solid #e8e7e7;
  /* border-radius: 16px; */
  box-shadow: 3px 3px 10px #dbdada;
`;

const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

export default Sign;
