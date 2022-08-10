import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 65%;
    height: 35px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #d5d4d4;
    font-size: 18px;
  }
  input:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.indigo};
  }
`;

export const Label = styled.label<{ isEssential: boolean }>`
  ${props =>
    props.isEssential &&
    css`
      :after {
        content: '*';
        color: red;
      }
    `}
`;
