import React, { forwardRef } from 'react';
import { Styled } from '../../../styles/main/pump';
import Tabs from './Tabs';
import { TabComponents } from './tab';
import { MainType, PumpType } from '../../../types';
import PeriodSearch from './PeriodSearch';
import { HandlePageChangeProps } from '../../../types/main/pump/tab';
import UserInfo from './UserInfo';
import PumpPrintModal from './PumpPrintModal';

interface PumpHistoryProps {
  row: MainType.RowsProps;
  fromToDate: PumpType.fromToDateProps;
  handleFromToDate: ({
    e,
    handleDate,
    validCallback,
    conditionalValidCallback,
  }: PumpType.HandleFromToDateProps) => void;
  handleDateRange: (callback: () => { fromDate: Date; toDate: Date }) => void;
  index: number;
  pages: {
    airRemovalHistoryPage: number;
    alarmHistoryPage: number;
    injectionHistoryPage: number;
    replacementCyclePage: number;
  };
  limit: number;
  handlePageChange: ({ page, type }: HandlePageChangeProps) => void;
  handlePrint: () => void;
}

const PumpHistory = forwardRef<HTMLDivElement, PumpHistoryProps>(
  (
    {
      row,
      fromToDate,
      handleFromToDate,
      handleDateRange,
      index,
      pages,
      limit,
      handlePageChange,
      handlePrint,
    },
    ref
  ) => {
    return (
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
          ref={ref}
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
    );
  }
);

export default PumpHistory;
