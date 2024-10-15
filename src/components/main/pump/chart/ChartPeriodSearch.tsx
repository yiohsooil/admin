import React from 'react';
import { Styled } from '../../../../styles/main/periodSearch';
import { PumpType } from '../../../../types';
import { Constants } from '../../../../constants/search';
import { dateRangeUtils } from '../../../../utils/dateRangeUtils';
import dayjs from 'dayjs';
import { isValidDateRange } from '../../../../utils/isValidDateRange';

interface ChartPeriodSearchProps {
  fromToDate: PumpType.fromToDateProps;
  handleFromToDate: ({
    e,
    handleDate,
    validCallback,
    conditionalValidCallback,
    chartConditionalValidCallback,
  }: PumpType.HandleFromToDateProps) => void;
  handleDateRange: (callback: () => { fromDate: Date; toDate: Date }) => void;
}

const ChartPeriodSearch = ({
  fromToDate,
  handleFromToDate,
  handleDateRange,
}: ChartPeriodSearchProps) => {
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
            onClick={() => handleDateRange(dateRangeUtils.get3LastDaysRange)}
          >
            {Constants.PERIOD['3DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() => handleDateRange(dateRangeUtils.getLastWeekRange)}
          >
            {Constants.PERIOD.WEEK}
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
              fromToDate,
              handleDate: 'fromDate',
              validCallback: isValidDateRange.isFromDateWithinThreeMonths,
              conditionalValidCallback: isValidDateRange.isToDateAfterFromDate,
              chartConditionalValidCallback:
                isValidDateRange.isDateRangeWithinSevenDays,
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
              fromToDate,
              handleDate: 'toDate',
              validCallback: isValidDateRange.isToDateValid,
              conditionalValidCallback: isValidDateRange.isToDateAfterFromDate,
              chartConditionalValidCallback:
                isValidDateRange.isDateRangeWithinSevenDays,
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

export default ChartPeriodSearch;
