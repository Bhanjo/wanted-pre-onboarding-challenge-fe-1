import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.darkblue};
  color: white;
  padding: 0 30px;
`;

export const RouteWrap = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 6px;
    color: ${({ theme }) => theme.colors.primary.white};
    cursor: pointer;
    border-radius: 4px;
    transition: 0.2s;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.primary.white};
    color: ${({ theme }) => theme.colors.primary.indigo};
  }
`;

export const RouteButton = styled(Link)`
  padding: 6px;
  color: ${({ theme }) => theme.colors.primary.white};
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary.white};
    color: ${({ theme }) => theme.colors.primary.indigo};
  }
`;
