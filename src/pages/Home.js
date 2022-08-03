import Axios from '../lib/axios';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentContainer from '../componenets/ContentContainer';

// 로그인이 안되어 있다면 로그인 페이지로 이동 기능 구현 필요
const Home = () => {
  // 폼 구조
  const inputsFormat = {
    title: '',
    content: '',
  };

  const [token, setToken] = useState(localStorage.getItem('jwt'));
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const getAllTodos = async () => {
    const res = await Axios.get('/todos', { headers: { Authorization: token } });
    const { data } = res.data;
    setTodos(data);
  };

  const createTodo = async form => {
    const req = await Axios.post('/todos', form, {
      headers: {
        Authorization: token,
      },
    });
    return req.data;
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

  const onSubmit = async e => {
    e.preventDefault();
    const todo = {
      title: title,
      content: content,
    };
    try {
      const res = await createTodo(todo);
      setTodos(todos.concat(res.data));
    } catch (e) {
      if (e.response.status === 400) {
        alert(e.response.data.details);
      } else {
        console.log('error occured in onSubmit', e);
      }
    }
    initFormInputs();
  };

  useEffect(() => {
    getAllTodos();
  }, []);

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
        <List>
          {todos.map(todo => (
            <button key={todo.id}>{todo.title}</button>
          ))}
        </List>
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
  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary.indigo};
    color: white;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
