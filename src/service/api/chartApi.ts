import { ApiType } from '../../types';
import { axiosInstance } from './axios';

const chartApiUrl = ({
  startDate,
  endDate,
  type,
}: Omit<ApiType.fetchPumpHistoryPrint, 'enabled'>) =>
  `/${type}?startDate=${startDate}&endDate=${endDate}`;

export const fetchChartsApi = async (
  props: Omit<ApiType.fetchPumpHistoryPrint, 'enabled'>
) => {
  const response = await axiosInstance.get(chartApiUrl({ ...props }));

  return response.data;
};
