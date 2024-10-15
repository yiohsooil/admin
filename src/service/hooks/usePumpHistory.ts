import { useQuery } from '@tanstack/react-query';
import { ApiType } from '../../types';
import { pumpHistoryApi } from '../api/pumpHistoryApi';

export const usePumpHistory = (props: ApiType.fetchPumpHistory) => {
  return useQuery({
    queryKey: [props.type, props.page],
    queryFn: () => pumpHistoryApi(props),
  });
};
