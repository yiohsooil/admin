import { useQuery } from '@tanstack/react-query';
import { FetchUsersProps, usersApi } from '../api/usersApi';

export const useUsers = ({ page, limit }: FetchUsersProps) => {
  return useQuery({
    queryKey: ['users', page, limit],
    queryFn: () => usersApi.fetchUsers({ page, limit }),
  });
};
