import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { alarmHistoryHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableHead from '../PumpTableHead';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';

const AlarmHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
  handlePageChange,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory.useAlarmHistory({
    startDate,
    endDate,
    page,
    limit,
  });

  console.log('AlarmHistory data', data);

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>알림이력</Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={alarmHistoryHeaderNames} />
          <PumpTableBody data={data?.data} />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
      <PumpPagination
        data={data?.data}
        count={Math.ceil(data?.items / limit)}
        page={page as number}
        handlePageChange={handlePageChange}
        type="alarmHistoryPage"
      />
    </Styled.Container>
  );
};

export default AlarmHistory;
