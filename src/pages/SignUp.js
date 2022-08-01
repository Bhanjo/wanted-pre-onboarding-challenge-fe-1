import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sign from '../componenets/Sign';

const SignUp = () => {
  const initForm = {
    email: '',
    password: '',
    rePassword: '',
  };

  const inputPlaceholder = {
    email: '이메일',
    password: '8자리 이상을 입력하세요',
    rePassword: '비밀번호 재입력',
  };

  const [inputs, setInputs] = useState(initForm);
  const { email, password, rePassword } = inputs;

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [rePasswordVaild, setRePasswordVaild] = useState(false);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    alert(`${email} ${password} ${rePassword}`);
    setInputs(initForm);
  };

  const emailPattern =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  useEffect(() => {
    setEmailValid(inputs.email !== '' && inputs.email.match(emailPattern) !== null);
    setPasswordValid(inputs.password.length >= 8);
    setRePasswordVaild(inputs.password === inputs.rePassword && inputs.rePassword !== '');
  }, [inputs.email, inputs.password, inputs.rePassword]);

  return (
    <Sign title={'회원가입'}>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <div>
            <InputGroup>
              <label htmlFor='email'>이메일</label>
              <input
                type='text'
                name='email'
                value={email}
                placeholder={inputPlaceholder.email}
                onChange={onChange}
              />
            </InputGroup>
            {!emailValid && inputs.email !== '' && <p>이메일이 올바르지 않습니다</p>}
          </div>
          <div>
            <InputGroup>
              <label htmlFor='password'>비밀번호</label>
              <input
                type='password'
                name='password'
                value={password}
                placeholder={inputPlaceholder.password}
                onChange={onChange}
              />
            </InputGroup>
            {!passwordValid && inputs.password !== '' && <p>8자리 이상 입력하세요</p>}
          </div>
          <div>
            <InputGroup>
              <label htmlFor='password'>비밀번호 확인</label>
              <input
                type='password'
                name='rePassword'
                value={rePassword}
                placeholder={inputPlaceholder.rePassword}
                onChange={onChange}
              />
            </InputGroup>
            {!rePasswordVaild && inputs.rePassword !== '' && <p>입력하신 비밀번호와 다릅니다.</p>}
          </div>
        </InputContainer>
        <SubmitButton type='submit' disabled={!(emailValid && passwordValid && rePasswordVaild)}>
          회원가입
        </SubmitButton>
      </Form>
    </Sign>
  );
};

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
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
  cursor: ${props => props.disabled || 'pointer'};
  :hover {
    background-color: ${props => props.disabled || props.theme.colors.primary.darkblue};
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  margin: 30px 20px 0 20px;
  p {
    color: red;
  }
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

export default SignUp;
