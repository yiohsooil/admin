import { ApiType } from '../../types';
import { axiosInstance } from './axios';

const pumpHistoryApiPrintUrl = ({
  startDate,
  endDate,
  type,
}: ApiType.fetchPumpHistoryPrint) =>
  `/${type}?startDate=${startDate}&endDate=${endDate}`;

export const pumpHistoryPrintApi = async (
  props: ApiType.fetchPumpHistoryPrint
) => {
  const response = await axiosInstance(pumpHistoryApiPrintUrl({ ...props }));

  return response.data;
};
