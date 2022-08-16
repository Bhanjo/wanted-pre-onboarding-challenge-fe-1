import { AxiosError } from 'axios';
import Axios from '../lib/axios';

type Form = {
  email: string;
  password: string;
};

export const signup = async (form: Form) => {
  try {
    const req = await Axios.post('/users/create', {
      email: form.email,
      password: form.password,
    });
    alert('회원가입 완료');
    return req.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.request.status === 409) {
        alert('이미 존재하는 회원입니다.');
      }
    }
    throw new Error(`회원가입 에러 ${e}`);
  }
};

export const signin = async (form: Form) => {
  try {
    const req = await Axios.post('users/login', {
      email: form.email,
      password: form.password,
    });
    return req.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.request.status === 400) {
        alert('일치하는 회원이 없습니다.');
      }
    }
    throw new Error(`로그인 에러 ${e}`);
  }
};
