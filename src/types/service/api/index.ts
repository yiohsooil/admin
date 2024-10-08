import dayjs from 'dayjs';

export interface LoginProps {
  id: string;
  password: string;
}

export interface FetchUsersProps {
  page: number | string;
  limit: number;
}

export interface fetchPumpHistoryPrint {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  type?: string;
  enabled?: boolean;
}

export interface fetchPumpHistory
  extends FetchUsersProps,
    fetchPumpHistoryPrint {}
