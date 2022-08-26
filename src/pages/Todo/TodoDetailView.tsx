import * as Style from './styles';

type Todo = {
  title: string;
  content: string;
};

type Props = {
  todo: Todo;
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
