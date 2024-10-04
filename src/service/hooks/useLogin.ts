import { useMutation } from '@tanstack/react-query';
import { ApiType } from '../../types';
import { loginApi } from '../api/loginApi';

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ id, password }: ApiType.LoginProps) =>
      loginApi.fetchLogin({ id, password }),
    onSuccess: (data) => {
      console.log('Login successful:', data);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
};
