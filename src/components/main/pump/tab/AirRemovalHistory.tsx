import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { historyHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableHead from '../PumpTableHead';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';
import { handleChecked } from '../../../../utils/isChecked';

export interface PumpDataProps {
  code: number;
  day: number;
  error: string;
  errorValue: string;
  hour: number;
  id: number;
  min: number;
  month: number;
  sec: number;
  type: number;
  value: number;
  year: number;
}

const AirRemovalHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
  handlePageChange,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory.useAirRemovalHistory({
    startDate,
    endDate,
    page,
    limit,
  });

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>공기빼기</Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={historyHeaderNames} />
          <PumpTableBody
            data={data?.data}
            handleChecked={handleChecked}
            type="AirRemovalHistory"
          />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
      <PumpPagination
        data={data?.data}
        count={Math.ceil(data?.items / limit)}
        page={page as number}
        handlePageChange={handlePageChange}
        type="airRemovalHistoryPage"
      />
    </Styled.Container>
  );
};

export default AirRemovalHistory;
