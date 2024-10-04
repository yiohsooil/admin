import { ApiType } from '../../types';
import { axiosInstance } from './axios';

// TODO: API 나오면 여기 코드 수정해야함
const fetchUsers = async ({ page, limit }: ApiType.FetchUsersProps) => {
  const response = await axiosInstance(`/users?_page=${page}&limit=${limit}`);

  return {
    data: response.data,
    totalCount: response.data.items,
    totalPages: response.data.pages,
  };
};

export const usersApi = {
  fetchUsers,
};
