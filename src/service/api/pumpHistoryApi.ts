import { ApiType } from '../../types';
import { axiosInstance } from './axios';

const pumpHistoryApiUrl = ({
  startDate,
  endDate,
  page,
  limit,
  type,
}: ApiType.fetchPumpHistory) =>
  `/${type}?startDate=${startDate}&endDate=${endDate}&_page=${page}&limit=${limit}`;

export const pumpHistoryApi = async (props: ApiType.fetchPumpHistory) => {
  const response = await axiosInstance.get(pumpHistoryApiUrl({ ...props }));

  return response.data;
};
