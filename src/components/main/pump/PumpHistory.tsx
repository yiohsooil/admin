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
import dayjs from 'dayjs';
import { HandlePageChangeProps } from '../../../types/main/pump/tab';
import UserInfo from './UserInfo';
import PrintButton from './PrintButton';
import PumpPrintModal from './PumpPrintModal';

const Pump = ({
  index,
  selectedIndex,
  state,
  toggleDrawer,
  row,
}: PumpType.PumpProps) => {
  const handleToggleDrawer = toggleDrawer(index, false);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [pages, setPages] = useState({
    airRemovalHistoryPage: 1,
    alarmHistoryPage: 1,
    injectionHistoryPage: 1,
    replacementCyclePage: 1,
  });
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

  const handlePageChange = ({ page, type }: HandlePageChangeProps) => {
    setPages((prev) => ({
      ...prev,
      [type]: page,
    }));
  };

  return (
    <Drawer
      anchor={'right'}
      open={index === selectedIndex && state}
      onClose={handleToggleDrawer}
    >
      <Styled.Container>
        <UserInfo
          name={row.name}
          pumpSerial={row.pumpSerial}
          birthDate={row.birthDate}
        />
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
              page={pages.injectionHistoryPage}
              limit={limit}
              handlePageChange={handlePageChange}
            />
          }
          tabTwo={
            <TabComponents.two
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={pages.replacementCyclePage}
              limit={limit}
              handlePageChange={handlePageChange}
            />
          }
          tabThree={
            <TabComponents.three
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={pages.airRemovalHistoryPage}
              limit={limit}
              handlePageChange={handlePageChange}
            />
          }
          tabFour={
            <TabComponents.four
              index={index}
              startDate={fromToDate.fromDate}
              endDate={fromToDate.toDate}
              page={pages.alarmHistoryPage}
              limit={limit}
              handlePageChange={handlePageChange}
            />
          }
        />
        <PumpPrintModal
          startDate={fromToDate.fromDate}
          endDate={fromToDate.toDate}
          ref={componentRef}
          handlePrint={handlePrint}
          children={
            <UserInfo
              name={row.name}
              pumpSerial={row.pumpSerial}
              birthDate={row.birthDate}
            />
          }
        />
      </Styled.Container>
    </Drawer>
  );
};

export default Pump;
