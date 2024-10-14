import React from 'react';
import { Styled } from '../../../styles/main/periodSearch';
import { isValidDateRange } from '../../../utils/isValidDateRange';
import { dateRangeUtils } from '../../../utils/dateRangeUtils';
import dayjs from 'dayjs';
import { PumpType } from '../../../types';
import { Constants } from '../../../constants/search';

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
      <Styled.Label>{Constants.PERIOD.TITLE}</Styled.Label>
      <Styled.SearchWrapper>
        <Styled.CustomButtonGroup
          variant="contained"
          aria-label="Basic button group"
        >
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getTodayRange)}
          >
            {Constants.PERIOD.TODAY}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLastWeekRange)}
          >
            {Constants.PERIOD.WEEK}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLast15DaysRange)}
          >
            {Constants.PERIOD['15DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLastMonthRange)}
          >
            {Constants.PERIOD.MONTH}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLast3MonthsRange)}
          >
            {Constants.PERIOD['3MONTHS']}
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
          {Constants.PERIOD.SEARCH}
        </Styled.CustomButton>
      </Styled.SearchButtonWrapper>
    </Styled.Container>
  );
};

export default PeriodSearch;
