import { useQuery } from '@tanstack/react-query';
import { ApiType } from '../../types';
import { fetchChartsApi } from '../api/chartApi';

export const useCharts = (
  props: Omit<ApiType.fetchPumpHistoryPrint, 'enabled'>
) => {
  return useQuery({
    queryKey: [props.type],
    queryFn: () => fetchChartsApi(props),
  });
};
