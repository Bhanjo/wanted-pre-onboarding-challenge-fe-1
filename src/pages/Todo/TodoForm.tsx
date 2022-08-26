import { useState } from 'react';
import usePostTodo from '../../hooks/usePostTodo';
import * as Style from './styles';

const TodoForm = () => {
  const inputsFormat = {
    title: '',
    content: '',
  };

  const postTodo = usePostTodo();

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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = {
      title: title,
      content: content,
    };
    postTodo.mutate(todo);
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
