import React, { useState } from 'react';
import { Styled } from '../../../../styles/chart';
import UserInfo from '../UserInfo';
import { MainType, PumpType } from '../../../../types';
import dayjs from 'dayjs';
import { dateRangeUtils } from '../../../../utils/dateRangeUtils';
import ChartPeriodSearch from './ChartPeriodSearch';
import Highchart from './Highchart';

interface PumpChartProps {
  row: MainType.RowsProps;
}

const PumpChart = ({ row }: PumpChartProps) => {
  const [fromToDate, setFromToDate] = useState<PumpType.fromToDateProps>({
    fromDate: dayjs().startOf('day'),
    toDate: dayjs(),
  });

  const handleFromToDate = ({
    e,
    handleDate,
    validCallback,
    conditionalValidCallback,
    chartConditionalValidCallback = undefined,
  }: PumpType.HandleFromToDateProps) => {
    const fromToDateNewDate = dateRangeUtils.fromToDateUtil({
      e,
      fromToDate,
      handleDate,
      validCallback,
      conditionalValidCallback,
      chartConditionalValidCallback,
    });

    if (fromToDateNewDate) {
      setFromToDate((prev) => ({
        ...prev,
        [handleDate]: fromToDateNewDate ?? null,
      }));
    }
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
      <UserInfo
        name={row.name}
        pumpSerial={row.pumpSerial}
        birthDate={row.birthDate}
      />
      <ChartPeriodSearch
        fromToDate={fromToDate}
        handleFromToDate={handleFromToDate}
        handleDateRange={handleDateRange}
      />
      <Styled.ChartWrapper>
        <Highchart fromToDate={fromToDate} />
      </Styled.ChartWrapper>
    </Styled.Container>
  );
};

export default PumpChart;
