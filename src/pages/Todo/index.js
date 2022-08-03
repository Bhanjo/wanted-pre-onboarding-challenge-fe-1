import Axios from '../../lib/axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from '../../componenets/ContentContainer';
import * as Style from './styles';

const Todo = () => {
  // 폼 구조
  const inputsFormat = {
    title: '',
    content: '',
  };

  const token = localStorage.getItem('jwt');
  const [todos, setTodos] = useState([]);
  const [detail, setDetail] = useState({
    title: '',
    content: '',
  });

  const navigate = useNavigate();
  const params = useParams();

  const getAllTodos = async () => {
    const res = await Axios.get('/todos', { headers: { Authorization: token } });
    const { data } = res.data;
    setTodos(data);
  };

  const getTodoById = async id => {
    if (id) {
      try {
        const req = await Axios.get(`/todos/${id}`, { headers: { Authorization: token } });
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

  const createTodo = async form => {
    const req = await Axios.post('/todos', form, {
      headers: {
        Authorization: token,
      },
    });
    return req.data;
  };

  const removeTodo = async id => {
    await Axios.delete(`/todos/${id}`, { headers: { Authorization: token } });
    setTodos(todos.filter(todo => todo.id !== id));
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
    if (!token) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/auth/sign-in');
    }
    getTodoById(params.id);
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
          {todos.map(todo => (
            <Style.Button key={todo.id} isTodo onClick={() => navigate(`/todo/${todo.id}`)}>
              {todo.title}
            </Style.Button>
          ))}
        </Style.List>
      </Style.TodoContainer>
      {params.id && (
        <Style.Detail>
          <Style.ButtonWrap>
            <Style.Button>수정</Style.Button>
            <Style.Button onClick={() => removeTodo(params.id)}>삭제</Style.Button>
          </Style.ButtonWrap>
          <Style.DetailText>
            <h1>{detail.title}</h1>
            <hr />
            <p>{detail.content}</p>
          </Style.DetailText>
        </Style.Detail>
      )}
    </ContentContainer>
  );
};

export default Todo;
