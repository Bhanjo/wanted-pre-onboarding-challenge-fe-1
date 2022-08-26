import Axios from '../../lib/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from '../../componenets/ContentContainer';
import * as Style from './styles';
import TodoForm from './TodoForm';
import useGetAllTodos from '../../hooks/useGetAllTodo';

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
  const token = localStorage.getItem('jwt');

  const { data: todos, error, isLoading } = useGetAllTodos();

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

  const removeTodo = async (id: string) => {
    await Axios.delete(`/todos/${id}`, { headers: { Authorization: token || '' } });
  };

  const updateTodo = async (id: string, form: Form) => {
    await Axios.put(`/todos/${id}`, form, { headers: { Authorization: token || '' } });

    setDetail({
      title: form.title,
      content: form.content,
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

  const onSubmitTodoUpdate = (e: React.FormEvent) => {
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
    if (!token) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/auth/sign-in');
    }
    if (params.id) {
      getTodoById(params.id);
    }
  }, [params.id]);

  if (error) {
    return <p>에러발생</p>;
  }

  if (isLoading) {
    return <p>로딩중..</p>;
  }

  return (
    <ContentContainer>
      <Style.TodoContainer>
        <TodoForm />
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
