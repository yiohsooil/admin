import { ApiType } from '../../types';
import { axiosInstance } from './axios';

const fetchLogin = async ({ id, password }: ApiType.LoginProps) => {
  const response = await axiosInstance.post('/api/adminSignIn', {
    id,
    password,
  });
  return response.data;
};

export const loginApi = {
  fetchLogin,
};
