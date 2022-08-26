import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '../api/todo';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: () => {
      return queryClient.invalidateQueries(['allTodo']);
    },
  });
};

export default useUpdateTodo;
