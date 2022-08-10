import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary.skywhite};
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  a:hover {
    background-color: ${({ theme }) => theme.colors.primary.indigo};
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;
