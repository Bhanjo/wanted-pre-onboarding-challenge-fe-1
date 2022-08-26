import Axios from '../lib/axios';

type Form = {
  title: string;
  content: string;
};

export const fetchAllTodos = async () => {
  const token = localStorage.getItem('jwt');
  const res = await Axios.get('/todos', { headers: { Authorization: token || '' } });
  const { data } = res.data;
  return data;
};

export const fetchTodoById = async (id: string | undefined, setDetail: any) => {
  const token = localStorage.getItem('jwt');
  if (id) {
    try {
      const req = await Axios.get(`/todos/${id}`, { headers: { Authorization: token || '' } });
      const { data } = req.data;
      setDetail(data);
      return data;
    } catch (e) {
      console.log('fetchTodoById 실패', e);
    }
  }
};

export const createTodo = async (form: Form) => {
  const token = localStorage.getItem('jwt');
  try {
    await Axios.post('/todos', form, {
      headers: {
        Authorization: token || '',
      },
    });
  } catch (e) {
    console.log('createTodo 에러 발생', e);
  }
};

type UpdateTodo = {
  id: string;
  form: Form;
};

export const updateTodo = async ({ id, form }: UpdateTodo) => {
  const token = localStorage.getItem('jwt');
  await Axios.put(`/todos/${id}`, form, { headers: { Authorization: token || '' } });
};

export const removeTodo = async (id: string) => {
  const token = localStorage.getItem('jwt');
  try {
    await Axios.delete(`/todos/${id}`, { headers: { Authorization: token || '' } });
  } catch {
    console.log('removeTodo 에러');
  }
};
