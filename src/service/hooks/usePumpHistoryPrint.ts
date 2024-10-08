import { useQuery } from '@tanstack/react-query';
import { ApiType } from '../../types';
import { pumpHistoryPrintApi } from '../api/pumpHistoryPrintApi';

const useAirRemovalHistoryPrint = (props: ApiType.fetchPumpHistoryPrint) => {
  return useQuery({
    queryKey: ['airRemoveHistory'],
    queryFn: () => pumpHistoryPrintApi.fetchAirRemovalHistoryPrint(props),
    enabled: props.enabled,
  });
};

const useAlarmHistoryPrint = (props: ApiType.fetchPumpHistoryPrint) => {
  return useQuery({
    queryKey: ['alarmHistory'],
    queryFn: () => pumpHistoryPrintApi.fetchAlarmHistoryPrint(props),
    enabled: props.enabled,
  });
};

const useInjectionHistoryPrint = (props: ApiType.fetchPumpHistoryPrint) => {
  console.log('enabled', props.enabled);

  return useQuery({
    queryKey: ['injectionHistory'],
    queryFn: () => pumpHistoryPrintApi.fetchInjectionHistoryPrint(props),
    enabled: props.enabled,
  });
};

const useReplacementCyclePrint = (props: ApiType.fetchPumpHistoryPrint) => {
  return useQuery({
    queryKey: ['replacementCycle'],
    queryFn: () => pumpHistoryPrintApi.fetchReplacementCyclePrint(props),
    enabled: props.enabled,
  });
};

export const usePumpHistoryPrint = {
  useAirRemovalHistoryPrint,
  useAlarmHistoryPrint,
  useInjectionHistoryPrint,
  useReplacementCyclePrint,
};
