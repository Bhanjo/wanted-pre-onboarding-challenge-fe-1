import styled from 'styled-components';

// 콘텐츠를 정 중앙에 배치하기 위한 컨테이너입니다.
const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ContentContainer;
