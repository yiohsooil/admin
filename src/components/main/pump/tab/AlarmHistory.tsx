import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableHead from '../PumpTableHead';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';
import { Constants } from '../../../../constants/table';

const AlarmHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
  handlePageChange,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory({
    startDate,
    endDate,
    page,
    limit,
    type: 'alarmHistory',
  });

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>
          {Constants.TabNames.ALARM}
        </Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={Constants.alarmHistoryHeaderNames} />
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
