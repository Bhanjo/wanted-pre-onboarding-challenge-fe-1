import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../lib/axios';
import Sign from '../../componenets/Sign';
import InputBox from '../../componenets/InputBox';

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

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const inputVaild = type => {
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

  const signupReqest = async () => {
    try {
      const data = await Axios.post('/users/create', {
        email: email,
        password: password,
      });

      return data.data;
    } catch (error) {
      if (error.request.status === 409) {
        alert('이미 존재하는 회원입니다.');
      }
      console.log('error occured in signupRequst', error);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await signupReqest();
      alert(res.message);
    } catch (error) {
      console.log('error occured in onSubmit');
    }
    setInputs(initForm);
    navigate('/');
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
      <InputBox inputName='email' labelText='이메일' error={inputVaild('email')} isEssentail>
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
        isEssentail
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
        isEssentail
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
