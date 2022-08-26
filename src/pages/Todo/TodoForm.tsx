import { useState } from 'react';
import { createTodo } from '../../api/todo';
import usePostTodo from '../../hooks/usePostTodo';
import * as Style from './styles';

type Todo = {
  id: string;
  title: string;
  content: string;
};

const TodoForm = () => {
  const token = localStorage.getItem('jwt');
  const inputsFormat = {
    title: '',
    content: '',
  };

  const postTodo = usePostTodo();

  const initFormInputs = () => {
    setFormInputs(inputsFormat);
  };

  const [formInputs, setFormInputs] = useState(inputsFormat);
  const { title, content } = formInputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = {
      title: title,
      content: content,
    };
    postTodo.mutate({ form: todo, token });
    initFormInputs();
  };

  return (
    <Style.Form onSubmit={onSubmit}>
      <input name='title' value={title} onChange={onChange} placeholder='제목' />
      <input name='content' value={content} onChange={onChange} placeholder='내용' />
      <Style.Button type='submit'>등록</Style.Button>
    </Style.Form>
  );
};

export default TodoForm;
