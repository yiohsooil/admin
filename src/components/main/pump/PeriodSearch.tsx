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
        <Styled.InputnWrapper>
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
                conditionalValidCallback:
                  isValidDateRange.isToDateAfterFromDate,
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
                conditionalValidCallback:
                  isValidDateRange.isToDateAfterFromDate,
              })
            }
          />
        </Styled.InputnWrapper>
        <Styled.CustomButtonGroup
          variant="contained"
          aria-label="Basic button group"
        >
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getDaysRange(0))
            }
          >
            {Constants.PERIOD.TODAY}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getDaysRange(6))
            }
          >
            {Constants.PERIOD.WEEK}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getDaysRange(14))
            }
          >
            {Constants.PERIOD['15DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getMonthRange(1))
            }
          >
            {Constants.PERIOD.MONTH}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getMonthRange(3))
            }
          >
            {Constants.PERIOD['3MONTHS']}
          </Styled.CustomButton>
        </Styled.CustomButtonGroup>
      </Styled.SearchWrapper>
    </Styled.Container>
  );
};

export default PeriodSearch;
