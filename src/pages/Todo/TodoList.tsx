import { useNavigate } from 'react-router-dom';
import * as Style from './styles';
import type { TodoItem } from '../../types/todo';

type Props = {
  todos: Array<TodoItem>;
};

const TodoList = ({ todos }: Props) => {
  const navigate = useNavigate();
  return (
    <Style.List>
      {todos.map((todo: TodoItem) => (
        <Style.Button key={todo.id} isTodo onClick={() => navigate(`/todo/${todo.id}`)}>
          {todo.title}
        </Style.Button>
      ))}
    </Style.List>
  );
};

export default TodoList;
