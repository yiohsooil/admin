import React, { useState } from 'react';
import Styled from '../../../styles/main/periodSearch';
import { isValidDateRange } from '../../../utils/isValidDateRange';
import { dateRangeUtils } from '../../../utils/dateRangeUtils';
import dayjs from 'dayjs';
import { pump } from '../../../types';

const PeriodSearch = ({ children }: pump.PeriodSearchProps) => {
  const [fromToDate, setFromToDate] = useState<pump.fromToDateProps>({
    fromDate: null,
    toDate: dayjs(),
  });

  const handleFromToDate = ({
    e,
    handleDate,
    validCallback,
    conditionalValidCallback,
  }: pump.HandleFromToDateProps) => {
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

    if (fromToDate[handleDate] && !conditionalValidCallback(validDate)) {
      return;
    }

    setFromToDate((prev) => ({
      ...prev,
      [handleDate]: e.target.value ? newDate : null,
    }));
  };

  const handleDateRange = (
    callback: () => { fromDate: Date; toDate: Date }
  ) => {
    const { fromDate, toDate } = callback();
    setFromToDate(() => ({
      fromDate: dayjs(fromDate),
      toDate: dayjs(toDate),
    }));
  };

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.Label htmlFor="">검색 기간</Styled.Label>
        <Styled.Input
          type="date"
          value={
            fromToDate.fromDate
              ? dayjs(fromToDate.fromDate).format('YYYY-MM-DD')
              : ''
          }
          onChange={(e) =>
            handleFromToDate({
              e,
              handleDate: 'fromDate',
              validCallback: isValidDateRange.isFromDateWithinThreeMonths,
              conditionalValidCallback: isValidDateRange.isToDateAfterFromDate,
            })
          }
        />
        <Styled.Span>~</Styled.Span>
        <Styled.Input
          type="date"
          value={
            fromToDate.toDate
              ? dayjs(fromToDate.toDate).format('YYYY-MM-DD')
              : ''
          }
          onChange={(e) =>
            handleFromToDate({
              e,
              handleDate: 'toDate',
              validCallback: isValidDateRange.isToDateValid,
              conditionalValidCallback: isValidDateRange.isToDateAfterFromDate,
            })
          }
        />
        <Styled.CustomButtonGroup
          variant="contained"
          aria-label="Basic button group"
        >
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getTodayRange)}
          >
            오늘
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLastWeekRange)}
          >
            1주
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLast15DaysRange)}
          >
            15일
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLastMonthRange)}
          >
            1개월
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLast3MonthsRange)}
          >
            3개월
          </Styled.CustomButton>
        </Styled.CustomButtonGroup>
        <div>{children}</div>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default PeriodSearch;
