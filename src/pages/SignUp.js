import { useState } from 'react';
import styled from 'styled-components';
import Sign from '../componenets/Sign';

const SignUp = () => {
  const initForm = {
    email: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initForm);
  const { email, password } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('email:', email, 'password:', password);
    setInputs(initForm);
  };

  return (
    <Sign title={'회원가입'}>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <InputGroup>
            <label htmlFor='email'>아이디</label>
            <input name='email' value={email} onChange={onChange} />
          </InputGroup>
          <InputGroup>
            <label htmlFor='password'>비밀번호</label>
            <input name='password' value={password} onChange={onChange} />
          </InputGroup>
        </InputContainer>
        <button type='submit'>회원가입</button>
      </Form>
    </Sign>
  );
};

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    color: #fff;
    display: flex;
    font-size: 30px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.indigo};
    transition: 0.2s;
    cursor: pointer;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.primary.darkblue};
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  margin: 30px 20px 0 20px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label::after {
    content: '*';
    color: red;
  }
  input {
    width: 70%;
    height: 35px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #d5d4d4;
  }
  input:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.indigo};
  }
`;

export default SignUp;
