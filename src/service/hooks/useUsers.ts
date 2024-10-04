import { useQuery } from '@tanstack/react-query';
import { usersApi } from '../api/usersApi';
import { ApiType } from '../../types';

export const useUsers = ({ page, limit }: ApiType.FetchUsersProps) => {
  return useQuery({
    queryKey: ['users', page, limit],
    queryFn: () => usersApi.fetchUsers({ page, limit }),
  });
};
