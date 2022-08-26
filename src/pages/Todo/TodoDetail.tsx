import { useState } from 'react';
import * as Style from './styles';
import TodoDetailView from './TodoDetailView';
import { updateTodo } from '../../api/todo';
import useRemoveTodo from '../../hooks/useRomoveTodo';

type Todo = {
  title: string;
  content: string;
};

type Props = {
  todo: Todo;
  todoId: string;
};

const TodoDetail = ({ todo, todoId }: Props) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateText, setUpdateText] = useState({
    title: '',
    content: '',
  });

  const removeTodo = useRemoveTodo();

  const onChangeUpdateMode = () => {
    setIsUpdateMode(!isUpdateMode);
    setUpdateText({
      title: todo.title,
      content: todo.content,
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
    const updateItem = {
      title: updateText.title,
      content: updateText.content,
    };
    if (todoId) {
      updateTodo(todoId, updateItem);
      setIsUpdateMode(false);
    }
  };

  return (
    <Style.Detail>
      <Style.ButtonWrap>
        <Style.Button onClick={onChangeUpdateMode}>수정</Style.Button>
        <Style.Button onClick={() => removeTodo.mutate(todoId)}>삭제</Style.Button>
      </Style.ButtonWrap>
      {isUpdateMode ? (
        <Style.Form onSubmit={onSubmitTodoUpdate}>
          <input type='text' name='title' value={updateText.title} onChange={onChangeUpdate} />
          <input type='text' name='content' value={updateText.content} onChange={onChangeUpdate} />
          <Style.Button type='submit'>완료</Style.Button>
          <Style.Button type='button' onClick={() => setIsUpdateMode(!isUpdateMode)}>
            취소
          </Style.Button>
        </Style.Form>
      ) : (
        <TodoDetailView todo={todo} />
      )}
    </Style.Detail>
  );
};

export default TodoDetail;
