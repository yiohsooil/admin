import dayjs from 'dayjs';
import { PumpDataProps } from '../components/main/pump/tab/AirRemovalHistory';

export interface CheckedProps {
  prevData?: PumpDataProps;
  data: PumpDataProps;
}

export const handleChecked = ({ prevData, data }: CheckedProps) => {
  if (prevData) {
    const startDate = dayjs()
      .set('year', prevData.year)
      .set('month', prevData.month)
      .set('day', prevData.day)
      .set('hour', prevData.hour)
      .set('minute', prevData.min)
      .set('second', prevData.sec);
    const endDate = dayjs()
      .set('year', data.year)
      .set('month', data.month)
      .set('day', data.day)
      .set('hour', data.hour)
      .set('minute', data.min)
      .set('second', data.sec);
    const fiveDaysInMilliseconds = 5 * 24 * 60 * 60 * 1000;
    const diffInMilliseconds = Math.abs(endDate.diff(startDate));
    return diffInMilliseconds > fiveDaysInMilliseconds;
  } else {
    return Math.floor(data.value * 0.1 * 0.1) < 10;
  }
};
