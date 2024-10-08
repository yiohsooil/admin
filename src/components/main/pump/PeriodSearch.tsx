import React from 'react';
import { Styled } from '../../../styles/main/periodSearch';
import { isValidDateRange } from '../../../utils/isValidDateRange';
import { dateRangeUtils } from '../../../utils/dateRangeUtils';
import dayjs from 'dayjs';
import { PumpType } from '../../../types';

interface PeriodSearchProps {
  fromToDate: PumpType.fromToDateProps;
  handleFromToDate: ({
    e,
    handleDate,
    validCallback,
    conditionalValidCallback,
  }: PumpType.HandleFromToDateProps) => void;
  handleDateRange: (callback: () => { fromDate: Date; toDate: Date }) => void;
}

const PeriodSearch = ({
  fromToDate,
  handleFromToDate,
  handleDateRange,
}: PeriodSearchProps) => {
  return (
    <Styled.Container>
      <Styled.Label>기간 검색</Styled.Label>
      <Styled.SearchWrapper>
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
      </Styled.SearchWrapper>
      <Styled.SearchButtonWrapper>
        <Styled.CustomButton size="medium" variant="contained">
          검색
        </Styled.CustomButton>
      </Styled.SearchButtonWrapper>
    </Styled.Container>
  );
};

export default PeriodSearch;
