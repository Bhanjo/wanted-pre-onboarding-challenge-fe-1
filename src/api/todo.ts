import Axios from '../lib/axios';

type Form = {
  title: string;
  content: string;
};

type Props = {
  form: Form;
  token: any;
};

export const fetchAllTodos = async () => {
  const token = localStorage.getItem('jwt');
  const res = await Axios.get('/todos', { headers: { Authorization: token || '' } });
  const { data } = res.data;
  return data;
};

export const createTodo = async ({ form, token }: Props) => {
  try {
    await Axios.post('/todos', form, {
      headers: {
        Authorization: token || '',
      },
    });
  } catch (e) {
    console.log('asdasd');
  }
};
