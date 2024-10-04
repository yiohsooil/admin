import React from 'react';
import PeriodSearch from '../PeriodSearch';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableHead from '../../TableHead';
import TableContainer from '../../TableContainer';
import { alarmHistoryHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';

const AlarmHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
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
          <TableHead headNames={alarmHistoryHeaderNames} active={1} />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
    </Styled.Container>
  );
};

export default AlarmHistory;
