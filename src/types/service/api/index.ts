import dayjs from 'dayjs';

export interface LoginProps {
  id: string;
  password: string;
}

export interface FetchUsersProps {
  page: number | string;
  limit: number;
}

export interface fetchPumpHistory extends FetchUsersProps {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  apiName?: string;
}
