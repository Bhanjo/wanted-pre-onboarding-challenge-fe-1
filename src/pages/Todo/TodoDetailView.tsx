import * as Style from './styles';
import type { TodoItem } from '../../types/todo';

type Props = {
  todo: TodoItem;
};

const TodoDetailView = ({ todo }: Props) => {
  return (
    <Style.DetailView>
      <h1>{todo.title}</h1>
      <hr />
      <p>{todo.content}</p>
    </Style.DetailView>
  );
};

export default TodoDetailView;
