import styled from 'styled-components';
import { useRef, useState } from 'react';

// 로그인이 안되어 있다면 로그인 페이지로 이동 기능 구현 필요
const Home = () => {
  const todoId = useRef(1);

  const [todos, setTodos] = useState([
    {
      id: 0,
      title: '제목1',
      content: '본문1',
      createdAt: '2022-01-01',
      updatedAt: '2022-07-01',
    },
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const initState = () => {
    setTitle('');
    setContent('');
  };

  const onChange = e => {
    setContent(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const todo = {
      id: todoId.current,
      title: 'asd',
      content: content,
      createdAt: '2020-07-30',
      updatedAt: '2020-07-30',
    };
    todoId.current += 1;
    setTodos(todos.concat(todo));
    initState();
  };

  return (
    <Container>
      <TodoContainer>
        <form onSubmit={onSubmit}>
          <input value={content} onChange={onChange} />
          <button type='submit'>등록</button>
        </form>
        <div>
          {todos.map(todo => (
            <p key={todo.id}>{todo.content}</p>
          ))}
        </div>
      </TodoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoContainer = styled.div`
  min-width: 400px;
  min-height: 500px;
  background-color: blue;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.skywhite};
`;

export default Home;
