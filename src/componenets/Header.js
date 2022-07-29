import styled from 'styled-components';

const Header = () => {
  return <Container>헤더입니다</Container>;
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.darkblue};
  color: white;
`;

export default Header;
