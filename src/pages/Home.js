import Axios from '../lib/axsios';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentContainer from '../componenets/ContentContainer';

// 로그인이 안되어 있다면 로그인 페이지로 이동 기능 구현 필요
const Home = () => {
  // const token = localStorage.getItem('jwt');
  const [token, setToken] = useState(localStorage.getItem('jwt'));

  const navigate = useNavigate();

  const todoId = useRef(1);

  const [todos, setTodos] = useState();

  const fetchTodos = async () => {
    const data = await Axios.get('/todos');
    return data.data;
  };

  useEffect(() => {
    const todoData = fetchTodos();
    setTodos(todoData);
  }, []);

  // 폼 구조
  const inputsFormat = {
    title: '',
    content: '',
  };

  const [formInputs, setFormInputs] = useState(inputsFormat);
  const { title, content } = formInputs;

  const initFormInputs = () => {
    setFormInputs(inputsFormat);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const todo = {
      id: todoId.current,
      title: 'asd',
      content: content,
    };
    todoId.current += 1;
    setTodos(todos.concat(todo));
    initFormInputs();
  };

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/auth/sign-in');
    }
  }, []);

  return (
    <ContentContainer>
      <TodoContainer>
        <form onSubmit={onSubmit}>
          <input name='title' value={title} onChange={onChange} />
          <input name='content' value={content} onChange={onChange} />
          <button type='submit'>등록</button>
        </form>
        <div>
          {/* {todos.map(todo => (
            <p key={todo.id}>{todo.content}</p>
          ))} */}
        </div>
      </TodoContainer>
    </ContentContainer>
  );
};

const TodoContainer = styled.div`
  min-width: 400px;
  min-height: 500px;
  background-color: blue;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.skywhite};
`;

export default Home;
