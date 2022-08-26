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

export const fetchTodoById = async (id: string | undefined) => {
  const token = localStorage.getItem('jwt');
  if (id) {
    try {
      const req = await Axios.get(`/todos/${id}`, { headers: { Authorization: token || '' } });
      const { data } = req.data;
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

export const updateTodo = async (id: string, form: Form) => {
  const token = localStorage.getItem('jwt');
  await Axios.put(`/todos/${id}`, form, { headers: { Authorization: token || '' } });
  // setDetail({
  //   title: form.title,
  //   content: form.content,
  // });
};

export const removeTodo = async (id: string) => {
  const token = localStorage.getItem('jwt');
  await Axios.delete(`/todos/${id}`, { headers: { Authorization: token || '' } });
};
