import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeTodo } from '../api/todo';

const useRemoveTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(removeTodo, {
    onSuccess: () => {
      return queryClient.invalidateQueries(['allTodo']);
    },
  });
};

export default useRemoveTodo;
