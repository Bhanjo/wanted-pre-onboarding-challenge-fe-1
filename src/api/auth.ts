import { AxiosError } from 'axios';
import Axios from '../lib/axios';

export const signup = async (form: { email: string; password: string }) => {
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
