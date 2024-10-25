import dayjs from 'dayjs';
import { PumpType } from '../types';

export const getDaysRange = (day: number) => {
  const fromDate = dayjs().subtract(day, 'day').startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

export const getMonthRange = (day: number) => {
  const fromDate = dayjs().subtract(day, 'month').startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

const fromToDateUtil = ({
  e,
  fromToDate,
  handleDate,
  validCallback,
  conditionalValidCallback,
  chartConditionalValidCallback = undefined,
}: PumpType.HandleFromToDateProps) => {
  const newDate = dayjs(e.target.value);
  const isValid = validCallback(newDate);
  if (!isValid) {
    return;
  }
  const validDate = {
    fromDate:
      handleDate === 'fromDate'
        ? newDate
        : (fromToDate.fromDate as dayjs.Dayjs),
    toDate:
      handleDate === 'toDate' ? newDate : (fromToDate.toDate as dayjs.Dayjs),
  };

  if (!fromToDate[handleDate] && validDate.fromDate && validDate.toDate) {
    const isDateRangeValid = conditionalValidCallback({
      fromDate: newDate,
      toDate: validDate.toDate,
    });
    if (!isDateRangeValid) {
      return;
    }
  }

  if (
    fromToDate[handleDate] &&
    chartConditionalValidCallback &&
    !chartConditionalValidCallback(validDate)
  ) {
    return;
  }

  if (fromToDate[handleDate] && !conditionalValidCallback(validDate)) {
    return;
  }

  return newDate;
};

export const dateRangeUtils = {
  getDaysRange,
  getMonthRange,
  fromToDateUtil,
};
