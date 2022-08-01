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

  const onSubmit = e => {
    e.preventDefault();
    alert('로그인');
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
