import axios from 'axios';

export const baseUrl = 'http://localhost:3001';

export interface FetchUsersProps {
  page: number | string;
  limit: number;
}

// TODO: API 나오면 여기 코드 수정해야함
const fetchUsers = async ({ page, limit }: FetchUsersProps) => {
  const response = await axios(`${baseUrl}/users?_page=${page}&limit=${limit}`);

  return {
    data: response.data,
    totalCount: response.data.items,
    totalPages: response.data.pages,
  };
};

export const usersApi = {
  fetchUsers,
};
