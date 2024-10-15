import dayjs from 'dayjs';
import { PumpType } from '../types';

export const getTodayRange = () => {
  const fromDate = dayjs().startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

export const get3LastDaysRange = () => {
  const fromDate = dayjs().subtract(3, 'day').startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

export const getLastWeekRange = () => {
  const fromDate = dayjs().subtract(7, 'day').startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

export const getLast15DaysRange = () => {
  const fromDate = dayjs().subtract(15, 'day').startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

export const getLastMonthRange = () => {
  const fromDate = dayjs().subtract(1, 'month').startOf('day').toDate();
  const toDate = dayjs().endOf('day').toDate();

  return { fromDate, toDate };
};

export const getLast3MonthsRange = () => {
  const fromDate = dayjs().subtract(3, 'month').startOf('day').toDate();
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
  getTodayRange,
  get3LastDaysRange,
  getLastWeekRange,
  getLast15DaysRange,
  getLastMonthRange,
  getLast3MonthsRange,
  fromToDateUtil,
};
