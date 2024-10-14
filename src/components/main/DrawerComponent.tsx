import React, { useRef, useState } from 'react';
import { PumpType } from '../../types';
import { HandlePageChangeProps } from '../../types/main/pump/tab';
import { useReactToPrint } from 'react-to-print';
import dayjs from 'dayjs';
import { Drawer } from '@mui/material';
import LeftTap from './pump/LeftTab';
import PumpHistory from './pump/PumpHistory';
import UserInfo from './pump/UserInfo';

const DrawerComponent = ({
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
  const [fromToDate, setFromToDate] = useState<PumpType.fromToDateProps>({
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
    pageStyle: `
        @page {
          size: auto;
          margin: 25mm;
        }
        body {
          -webkit-print-color-adjust: exact;
          margin: 20mm;
        }
        header, footer {
          display: none !important;
        }
        table, th, td {
          border: 1px solid #ccc !important;
          border-collapse: collapse !important;
        }
        @media print {
          .print-button {
            display: none !important;
          }
        }
      `,
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
      <LeftTap
        historyTab={
          <PumpHistory
            row={row}
            index={index}
            limit={limit}
            fromToDate={fromToDate}
            pages={pages}
            handleFromToDate={handleFromToDate}
            handleDateRange={handleDateRange}
            handlePageChange={handlePageChange}
            ref={componentRef}
            handlePrint={handlePrint}
          />
        }
        chartsTab={
          <UserInfo
            name={row.name}
            pumpSerial={row.pumpSerial}
            birthDate={row.birthDate}
          />
        }
      />
    </Drawer>
  );
};
export default DrawerComponent;
