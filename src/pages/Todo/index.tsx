import Axios from '../../lib/axios';
import React, { SetStateAction, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from '../../componenets/ContentContainer';
import * as Style from './styles';

type Form = {
  title: string;
  content: string;
};

type Todo = {
  id: string;
  title: string;
  content: string;
};

const Todo = () => {
  // 폼 구조
  const inputsFormat = {
    title: '',
    content: '',
  };

  const token = localStorage.getItem('jwt');
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [detail, setDetail] = useState({
    title: '',
    content: '',
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateText, setUpdateText] = useState({
    title: '',
    content: '',
  });

  const navigate = useNavigate();
  const params = useParams();

  const getAllTodos = async () => {
    const res = await Axios.get('/todos', { headers: { Authorization: token || '' } });
    const { data } = res.data;
    setTodos(data);
  };

  const getTodoById = async (id: string) => {
    if (id) {
      try {
        const req = await Axios.get(`/todos/${id}`, { headers: { Authorization: token || '' } });
        const { data } = req.data;
        setDetail({
          title: data.title,
          content: data.content,
        });
      } catch (e) {
        setDetail({
          title: '해당 todo를 찾을 수 없습니다',
          content: '',
        });
      }
    }
  };

  const createTodo = async (form: Form) => {
    const req = await Axios.post('/todos', form, {
      headers: {
        Authorization: token || '',
      },
    });
    return req.data;
  };

  const removeTodo = async (id: string) => {
    await Axios.delete(`/todos/${id}`, { headers: { Authorization: token || '' } });
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const updateTodo = async (id: string, form: Form) => {
    await Axios.put(`/todos/${id}`, form, { headers: { Authorization: token || '' } });
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, title: form.title, content: form.content } : todo,
      ),
    );
    setDetail({
      title: form.title,
      content: form.content,
    });
  };

  const [formInputs, setFormInputs] = useState(inputsFormat);
  const { title, content } = formInputs;

  const initFormInputs = () => {
    setFormInputs(inputsFormat);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const onChangeUpdateMode = () => {
    setIsUpdateMode(!isUpdateMode);
    setUpdateText({
      title: detail.title,
      content: detail.content,
    });
  };

  const onChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateText({
      ...updateText,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const todo = {
      title: title,
      content: content,
    };
    try {
      const res = await createTodo(todo);
      setTodos(todos.concat(res.data));
    } catch (e: any) {
      if (e.response.status === 400) {
        alert(e.response.data.details);
      } else {
        console.log('error occured in onSubmit', e);
      }
    }
    initFormInputs();
  };

  const onSubmitTodoUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = params.id;
    const updateItem = {
      title: updateText.title,
      content: updateText.content,
    };
    if (id) {
      updateTodo(id, updateItem);
      setIsUpdateMode(false);
    }
  };

  useEffect(() => {
    getAllTodos();
    if (!token) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/auth/sign-in');
    }
    if (params.id) {
      getTodoById(params.id);
    }
  }, [params.id]);

  return (
    <ContentContainer>
      <Style.TodoContainer>
        <Style.Form onSubmit={onSubmit}>
          <input name='title' value={title} onChange={onChange} placeholder='제목' />
          <input name='content' value={content} onChange={onChange} placeholder='내용' />
          <Style.Button type='submit'>등록</Style.Button>
        </Style.Form>
        <Style.List>
          {todos.map((todo: Todo) => (
            <Style.Button key={todo.id} isTodo onClick={() => navigate(`/todo/${todo.id}`)}>
              {todo.title}
            </Style.Button>
          ))}
        </Style.List>
      </Style.TodoContainer>
      {params.id && (
        <Style.Detail>
          <Style.ButtonWrap>
            <Style.Button onClick={onChangeUpdateMode}>수정</Style.Button>
            <Style.Button onClick={() => removeTodo(params.id || '')}>삭제</Style.Button>
          </Style.ButtonWrap>
          {isUpdateMode ? (
            <Style.Form onSubmit={onSubmitTodoUpdate}>
              <input type='text' name='title' value={updateText.title} onChange={onChangeUpdate} />
              <input
                type='text'
                name='content'
                value={updateText.content}
                onChange={onChangeUpdate}
              />
              <Style.Button type='submit'>완료</Style.Button>
              <Style.Button type='button' onClick={() => setIsUpdateMode(!isUpdateMode)}>
                취소
              </Style.Button>
            </Style.Form>
          ) : (
            <Style.DetailView>
              <h1>{detail.title}</h1>
              <hr />
              <p>{detail.content}</p>
            </Style.DetailView>
          )}
        </Style.Detail>
      )}
    </ContentContainer>
  );
};

export default Todo;
