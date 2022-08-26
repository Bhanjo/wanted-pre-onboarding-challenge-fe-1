import { useQuery } from '@tanstack/react-query';
import { fetchAllTodos } from '../api/todo';

const useGetAllTodos = () => {
  return useQuery(['allTodo'], fetchAllTodos);
};

export default useGetAllTodos;
