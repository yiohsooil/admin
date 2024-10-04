import { useQuery } from '@tanstack/react-query';
import { ApiType } from '../../types';
import { pumpHistoryApi } from '../api/pumpHistoryApi';

const useAirRemovalHistory = (props: ApiType.fetchPumpHistory) => {
  return useQuery({
    queryKey: ['airRemoveHistory', props.page],
    queryFn: () => pumpHistoryApi.fetchAirRemovalHistory(props),
  });
};

const useAlarmHistory = (props: ApiType.fetchPumpHistory) => {
  return useQuery({
    queryKey: ['alarmHistory', props.page],
    queryFn: () => pumpHistoryApi.fetchAlarmHistory(props),
  });
};

const useInjectionHistory = (props: ApiType.fetchPumpHistory) => {
  return useQuery({
    queryKey: ['injectionHistory', props.page],
    queryFn: () => pumpHistoryApi.fetchInjectionHistory(props),
  });
};

const useReplacementCycle = (props: ApiType.fetchPumpHistory) => {
  return useQuery({
    queryKey: ['replacementCycle', props.page],
    queryFn: () => pumpHistoryApi.fetchReplacementCycle(props),
  });
};

export const usePumpHistory = {
  useAirRemovalHistory,
  useAlarmHistory,
  useInjectionHistory,
  useReplacementCycle,
};
