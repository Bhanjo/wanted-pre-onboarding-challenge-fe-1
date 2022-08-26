import { useNavigate } from 'react-router-dom';
import * as Style from './styles';

type Todo = {
  title: string;
  content: string;
  id: string;
};

type Props = {
  todos: Array<Todo>;
};

const TodoList = ({ todos }: Props) => {
  const navigate = useNavigate();
  return (
    <Style.List>
      {todos.map((todo: Todo) => (
        <Style.Button key={todo.id} isTodo onClick={() => navigate(`/todo/${todo.id}`)}>
          {todo.title}
        </Style.Button>
      ))}
    </Style.List>
  );
};

export default TodoList;
