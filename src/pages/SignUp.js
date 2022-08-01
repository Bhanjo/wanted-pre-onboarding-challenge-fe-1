import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sign from '../componenets/Sign';
import InputBox from '../componenets/InputBox';

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

  const vaildMessages = {
    email: '이메일이 올바르지 않습니다',
    password: '8자리 이상 입력하세요',
    rePassword: '입력하신 비밀번호와 다릅니다.',
  };

  const inputVaild = type => {
    let msg = null;
    if (type === 'email' && !emailValid && inputs.email) {
      msg = vaildMessages.email;
    }

    if (type === 'password' && !passwordValid && inputs.password) {
      msg = vaildMessages.password;
    }

    if (type === 'rePassword' && !rePasswordVaild && inputs.rePassword) {
      msg = vaildMessages.rePassword;
    }

    return msg;
  };

  return (
    <Sign title={'회원가입'}>
      <Form onSubmit={onSubmit}>
        <FormDatas>
          <InputBox inputName='email' labelText='이메일' error={inputVaild('email')}>
            <input
              type='text'
              name='email'
              value={email}
              placeholder={inputPlaceholder.email}
              onChange={onChange}
            />
          </InputBox>
          <InputBox inputName='password' labelText='비밀번호' error={inputVaild('password')}>
            <input
              type='password'
              name='password'
              value={password}
              placeholder={inputPlaceholder.password}
              onChange={onChange}
            />
          </InputBox>
          <InputBox
            inputName='rePassword'
            labelText='비밀번호 확인'
            error={inputVaild('rePassword')}
          >
            <input
              type='password'
              name='rePassword'
              value={rePassword}
              placeholder={inputPlaceholder.rePassword}
              onChange={onChange}
            />
          </InputBox>
        </FormDatas>
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

const FormDatas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  margin: 30px 20px 0 20px;
  p {
    color: red;
  }
`;

export default SignUp;
