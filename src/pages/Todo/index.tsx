import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from '../../componenets/ContentContainer';
import * as Style from './styles';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import useGetAllTodos from '../../hooks/useGetAllTodo';
import { fetchTodoById } from '../../api/todo';

const Todo = () => {
  const token = localStorage.getItem('jwt');
  const navigate = useNavigate();
  const params = useParams();

  const { data: todos, error, isLoading } = useGetAllTodos();

  const [detail, setDetail] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/auth/sign-in');
    }
    if (params.id) {
      fetchTodoById(params.id, setDetail);
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
        <TodoList todos={todos} />
      </Style.TodoContainer>
      {params.id && detail && <TodoDetail todo={detail} todoId={params.id} />}
    </ContentContainer>
  );
};

export default Todo;
