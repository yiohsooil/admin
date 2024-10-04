import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { Styled } from '../../../styles/main/pump';
import PumpPrint from './PumpPrint';
import Tabs from './Tabs';
import { TabComponents } from './tab';
import { PumpType } from '../../../types';
import PeriodSearch from './PeriodSearch';
import { usePumpHistory } from '../../../service/hooks/usePumpHistory';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

const Pump = ({
  index,
  selectedIndex,
  state,
  toggleDrawer,
  row,
}: PumpType.PumpProps) => {
  const handleToggleDrawer = toggleDrawer(index, false);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [limit, setLimit] = useState(10);
  const [fromToDate, setFromToDate] = React.useState<PumpType.fromToDateProps>({
    fromDate: dayjs().subtract(1, 'month').startOf('day'),
    toDate: dayjs(),
  });

  const handleFromToDate = ({
    e,
    handleDate,
    validCallback,
    conditionalValidCallback,
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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Drawer
      anchor={'right'}
      open={index === selectedIndex && state}
      onClose={handleToggleDrawer}
    >
      <Styled.Container>
        <PeriodSearch
          fromToDate={fromToDate}
          handleFromToDate={handleFromToDate}
          handleDateRange={handleDateRange}
        />
        <Tabs
          tabOne={
            <TabComponents.one
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={page}
              limit={limit}
            />
          }
          tabTwo={
            <TabComponents.two
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={page}
              limit={limit}
            />
          }
          tabThree={
            <TabComponents.three
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={page}
              limit={limit}
            />
          }
          tabFour={
            <TabComponents.four
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={page}
              limit={limit}
            />
          }
        />
        {/* <Styled.PrintButton onClick={handlePrint}>
          프린트 하기
        </Styled.PrintButton> */}
        {/* <PumpPrint ref={componentRef} row={row} /> */}
      </Styled.Container>
    </Drawer>
  );
};

export default Pump;
