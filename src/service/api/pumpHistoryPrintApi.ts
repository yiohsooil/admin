import { ApiType } from '../../types';
import { axiosInstance } from './axios';

const pumpHistoryApiPrintUrl = ({
  startDate,
  endDate,
  type,
}: ApiType.fetchPumpHistoryPrint) =>
  `/${type}?startDate=${startDate}&endDate=${endDate}`;

// TODO: API 나오면 여기 코드 수정해야함
const fetchAirRemovalHistoryPrint = async (
  props: ApiType.fetchPumpHistoryPrint
) => {
  const response = await axiosInstance(
    pumpHistoryApiPrintUrl({ ...props, type: 'airRemovalHistory' })
  );

  return response.data;
};

const fetchAlarmHistoryPrint = async (props: ApiType.fetchPumpHistoryPrint) => {
  const response = await axiosInstance(
    pumpHistoryApiPrintUrl({
      ...props,
      type: 'alarmHistory',
    })
  );

  return response.data;
};

const fetchInjectionHistoryPrint = async (
  props: ApiType.fetchPumpHistoryPrint
) => {
  const response = await axiosInstance(
    pumpHistoryApiPrintUrl({
      ...props,
      type: 'injectionHistory',
    })
  );

  return response.data;
};

const fetchReplacementCyclePrint = async (
  props: ApiType.fetchPumpHistoryPrint
) => {
  const response = await axiosInstance(
    pumpHistoryApiPrintUrl({
      ...props,
      type: 'replacementCycle',
    })
  );

  return response.data;
};

export const pumpHistoryPrintApi = {
  fetchAirRemovalHistoryPrint,
  fetchAlarmHistoryPrint,
  fetchInjectionHistoryPrint,
  fetchReplacementCyclePrint,
};
