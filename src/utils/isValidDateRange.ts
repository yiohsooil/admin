import dayjs from 'dayjs';
import { pump } from '../types';

const showError = (message: string): void => {
  console.error(message);
  alert(message);
};

const isToDateValid = (toDate: dayjs.Dayjs): boolean => {
  const today = dayjs();
  if (toDate.isAfter(today)) {
    showError('종료날짜는 오늘 날짜를 초과할 수 없습니다.');
    return false;
  }

  return true;
};

const isToDateAfterFromDate = ({
  fromDate,
  toDate,
}: pump.DateRangeProps): boolean => {
  if (toDate < fromDate) {
    showError('종료 날짜는 시작 날짜보다 과거일 수 없습니다.');
    return false;
  }
  return true;
};

const isFromDateWithinThreeMonths = (fromDate: dayjs.Dayjs): boolean => {
  const today = dayjs();
  const threeMonthsAgo = today.subtract(3, 'month').startOf('day');

  if (fromDate.isBefore(threeMonthsAgo)) {
    showError('시작 날짜는 3개월 이전일 수 없습니다.');
    return false;
  }
  return true;
};

const isValidDateRange = {
  isToDateValid,
  isToDateAfterFromDate,
  isFromDateWithinThreeMonths,
};

export { isValidDateRange };
