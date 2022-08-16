import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sign from '../../componenets/Sign';
import InputBox from '../../componenets/InputBox';
import { signup } from '../../api/auth';

type checkVaildType = 'email' | 'password' | 'rePassword';

const SignUp = () => {
  // 리액트 라우터 돔 v6 이후부터는 useHistory 대신 useNavigate 사용
  const navigate = useNavigate();
  const initForm = {
    email: '',
    password: '',
    rePassword: '',
  };

  const placeholder = {
    email: '이메일',
    password: '8자리 이상을 입력하세요',
    rePassword: '비밀번호 재입력',
  };

  const emailPattern =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const vaildMessages = {
    email: '이메일이 올바르지 않습니다',
    password: '8자리 이상 입력하세요',
    rePassword: '입력하신 비밀번호와 다릅니다.',
  };

  const [inputs, setInputs] = useState(initForm);
  const { email, password, rePassword } = inputs;

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [rePasswordVaild, setRePasswordVaild] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const inputVaild = (type: checkVaildType) => {
    let msg = null;
    if (type === 'email' && !emailValid && email) {
      msg = vaildMessages.email;
    }

    if (type === 'password' && !passwordValid && password) {
      msg = vaildMessages.password;
    }

    if (type === 'rePassword' && !rePasswordVaild && rePassword) {
      msg = vaildMessages.rePassword;
    }

    return msg;
  };

  const onSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    signup({ email, password }).then(() => navigate('/'));
    setInputs(initForm);
  };

  useEffect(() => {
    setEmailValid(email !== '' && email.match(emailPattern) !== null);
    setPasswordValid(password.length >= 8);
    setRePasswordVaild(password === rePassword && rePassword !== '');
  }, [email, password, rePassword]);

  return (
    <Sign
      title={'회원가입'}
      onSubmit={onSubmit}
      BtnDisabled={!(emailValid && passwordValid && rePasswordVaild)}
    >
      <InputBox inputName='email' labelText='이메일' error={inputVaild('email')} isEssential={true}>
        <input
          type='text'
          name='email'
          value={email}
          placeholder={placeholder.email}
          onChange={onChange}
        />
      </InputBox>
      <InputBox
        inputName='password'
        labelText='비밀번호'
        error={inputVaild('password')}
        isEssential={true}
      >
        <input
          type='password'
          name='password'
          value={password}
          placeholder={placeholder.password}
          onChange={onChange}
        />
      </InputBox>
      <InputBox
        inputName='rePassword'
        labelText='비밀번호 확인'
        error={inputVaild('rePassword')}
        isEssential={true}
      >
        <input
          type='password'
          name='rePassword'
          value={rePassword}
          placeholder={placeholder.rePassword}
          onChange={onChange}
        />
      </InputBox>
    </Sign>
  );
};

export default SignUp;
