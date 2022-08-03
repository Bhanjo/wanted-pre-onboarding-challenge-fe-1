import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  background-color: blue;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.skywhite};
  overflow-y: auto;
  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary.darkblue};
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    padding: 8px;
    border: none;
    font-size: 15px;
    border-bottom: 1px solid gainsboro;
  }
  input:focus {
    outline: none;
  }
  button {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary.indigo};
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
    font-size: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.white};
  }
  /* button:nth-child(2n + 1) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.indigo};
  } */
`;
