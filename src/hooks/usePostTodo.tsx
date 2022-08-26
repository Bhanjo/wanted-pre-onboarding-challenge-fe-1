import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api/todo';

const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(createTodo, {
    onSuccess: () => {
      return queryClient.invalidateQueries(['allTodo']);
    },
  });
};

export default usePostTodo;
