import { useQuery } from '@tanstack/react-query';
import { ApiType } from '../../types';
import { pumpHistoryPrintApi } from '../api/pumpHistoryPrintApi';

export const usePumpHistoryPrint = (props: ApiType.fetchPumpHistoryPrint) => {
  return useQuery({
    queryKey: [props.type],
    queryFn: () => pumpHistoryPrintApi(props),
    enabled: props.enabled,
  });
};
