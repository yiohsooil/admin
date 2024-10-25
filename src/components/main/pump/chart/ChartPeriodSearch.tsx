import React from 'react';
import { Styled } from '../../../../styles/main/periodSearch';
import { PumpType } from '../../../../types';
import { Constants } from '../../../../constants/search';
import { dateRangeUtils } from '../../../../utils/dateRangeUtils';
import dayjs from 'dayjs';
import { isValidDateRange } from '../../../../utils/isValidDateRange';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  handlePrevFromToDate: () => void;
  handleNextFromToDate: () => void;
}

const ChartPeriodSearch = ({
  fromToDate,
  handleFromToDate,
  handleDateRange,
  handlePrevFromToDate,
  handleNextFromToDate,
}: ChartPeriodSearchProps) => {
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
                conditionalValidCallback:
                  isValidDateRange.isToDateAfterFromDate,
                chartConditionalValidCallback:
                  isValidDateRange.isDateRangeWithinSevenDays,
              })
            }
          />
        </Styled.InputnWrapper>
        <Styled.CustomButtonGroup
          variant="contained"
          aria-label="Basic button group"
        >
          <Styled.CustomButton size="small" onClick={handlePrevFromToDate}>
            <ArrowBackIosIcon />
          </Styled.CustomButton>
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
              handleDateRange(() => dateRangeUtils.getDaysRange(1))
            }
          >
            {Constants.PERIOD['2DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getDaysRange(2))
            }
          >
            {Constants.PERIOD['3DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getDaysRange(3))
            }
          >
            {Constants.PERIOD['4DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton
            size="small"
            onClick={() =>
              handleDateRange(() => dateRangeUtils.getDaysRange(4))
            }
          >
            {Constants.PERIOD['5DAYS']}
          </Styled.CustomButton>
          <Styled.CustomButton size="small" onClick={handleNextFromToDate}>
            <ArrowForwardIosIcon />
          </Styled.CustomButton>
        </Styled.CustomButtonGroup>
      </Styled.SearchWrapper>
    </Styled.Container>
  );
};

export default ChartPeriodSearch;
