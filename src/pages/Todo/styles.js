import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  background-color: blue;
  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.colors.primary.skywhite};
  overflow-y: auto;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${props => (props.isTodo ? 'none' : props.theme.colors.primary.indigo)};
  color: ${props => (props.isTodo ? 'black' : props.theme.colors.primary.white)};
  border-bottom: ${props => props.isTodo && `1px solid ${props.theme.colors.primary.white}`};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary.darkblue};
    color: white;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  button:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.primary.white};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    padding: 8px 15px;
    border: none;
    font-size: 15px;
    border-bottom: 1px solid gainsboro;
  }
  input:focus {
    outline: none;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Detail = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.primary.skywhite};
  border-radius: 0 8px 8px 0;
  border-left: 1px solid ${({ theme }) => theme.colors.primary.white};
  word-break: break-all;
`;

export const DetailText = styled.div`
  margin: 20px 10px;
  hr {
    border: 1px solid ${({ theme }) => theme.colors.primary.white};
  }
`;
