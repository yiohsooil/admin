import dayjs from 'dayjs';

export const getTodayRange = () => {
  const fromDate = dayjs().startOf('day').toDate();
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

export const dateRangeUtils = {
  getTodayRange,
  getLastWeekRange,
  getLast15DaysRange,
  getLastMonthRange,
  getLast3MonthsRange,
};
