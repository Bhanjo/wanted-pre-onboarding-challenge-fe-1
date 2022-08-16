import Sign from '../../componenets/Sign';
import InputBox from '../../componenets/InputBox';
import { signin } from '../../api/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signin({ email, password }).then(res => {
      localStorage.setItem('jwt', res.token);
      navigate('/');
    });
    setInputs(initForm);
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      alert('이미 로그인 되었습니다.');
      navigate('/');
    }
  }, []);

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
