import { ApiType } from '../../types';
import { axiosInstance } from './axios';

const pumpHistoryApiUrl = ({
  startDate,
  endDate,
  page,
  limit,
  apiName,
}: ApiType.fetchPumpHistory) =>
  `/${apiName}?startDate=${startDate}&endDate=${endDate}&_page=${page}&limit=${limit}`;

// TODO: API 나오면 여기 코드 수정해야함
const fetchAirRemovalHistory = async (props: ApiType.fetchPumpHistory) => {
  const response = await axiosInstance(
    pumpHistoryApiUrl({ ...props, apiName: 'airRemovalHistory' })
  );

  return response.data;
};

const fetchAlarmHistory = async (props: ApiType.fetchPumpHistory) => {
  const response = await axiosInstance(
    pumpHistoryApiUrl({
      ...props,
      apiName: 'alarmHistory',
    })
  );

  return response.data;
};

const fetchInjectionHistory = async (props: ApiType.fetchPumpHistory) => {
  const response = await axiosInstance(
    pumpHistoryApiUrl({
      ...props,
      apiName: 'injectionHistory',
    })
  );

  return response.data;
};

const fetchReplacementCycle = async (props: ApiType.fetchPumpHistory) => {
  const response = await axiosInstance(
    pumpHistoryApiUrl({
      ...props,
      apiName: 'replacementCycle',
    })
  );

  return response.data;
};

export const pumpHistoryApi = {
  fetchAirRemovalHistory,
  fetchAlarmHistory,
  fetchInjectionHistory,
  fetchReplacementCycle,
};
