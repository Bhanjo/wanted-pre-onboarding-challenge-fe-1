import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 450px;
  height: 600px;
  background-color: #fff;
  border: 1px solid #e8e7e7;
  box-shadow: 3px 3px 10px #dbdada;
`;

export const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #fff;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  background-color: ${props => (props.disabled ? 'gray' : props.theme.colors.primary.indigo)};
  transition: 0.2s;
  cursor: ${props => !props.disabled && 'pointer'};
  :hover {
    background-color: ${props => !props.disabled && props.theme.colors.primary.darkblue};
  }
`;

export const FormDatas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  margin: 30px 20px 0 20px;
  p {
    color: red;
  }
`;
