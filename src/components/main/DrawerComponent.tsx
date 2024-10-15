import React, { useRef, useState } from 'react';
import { PumpType } from '../../types';
import { HandlePageChangeProps } from '../../types/main/pump/tab';
import dayjs from 'dayjs';
import { Drawer } from '@mui/material';
import LeftTap from './pump/LeftTab';
import PumpHistory from './pump/PumpHistory';
import PumpChart from './pump/chart/PumpChart';
import { dateRangeUtils } from '../../utils/dateRangeUtils';
import { useHandlePrint } from '../../utils/print';

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

  const handlePrint = useHandlePrint(componentRef);

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
        chartsTab={<PumpChart row={row} />}
      />
    </Drawer>
  );
};
export default DrawerComponent;
