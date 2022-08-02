import Axios from '../../lib/axios';
import Sign from '../../componenets/Sign';
import InputBox from '../../componenets/InputBox';
import { useState } from 'react';

const SignIn = () => {
  const initForm = {
    email: '',
    password: '',
  };

  const placeholder = {
    email: 'Email',
    password: 'Password',
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

  const loginReqeust = async () => {
    try {
      const data = await Axios.post('/users/login', {
        email: email,
        password: password,
      });
      return data.data;
    } catch (e) {
      if (e.request.status === 400) {
        alert('일치하는 정보가 없습니다');
      } else {
        console.log('error occured in fetchLogin', e);
      }
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await loginReqeust();
      localStorage.setItem('jwt', res.token);
      alert('로그인이 됐습니다.');
    } catch (e) {
      console.log('error occured in onSubmit', e);
    }
    setInputs(initForm);
  };

  return (
    <Sign title='로그인' onSubmit={onSubmit}>
      <InputBox inputName='email' labelText='이메일'>
        <input
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          placeholder={placeholder.email}
        />
      </InputBox>
      <InputBox inputName='password' labelText='비밀번호'>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder={placeholder.password}
        />
      </InputBox>
    </Sign>
  );
};

export default SignIn;
