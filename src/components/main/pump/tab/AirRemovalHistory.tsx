import React from 'react';
import PeriodSearch from '../PeriodSearch';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import TableHead from '../../TableHead';
import { historyHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';

const AirRemovalHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory.useAirRemovalHistory({
    startDate,
    endDate,
    page,
    limit,
  });

  console.log('AirRemovalHistory data', data);
  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>공기빼기</Styled.PumpHistoryTitle>
        <TableContainer>
          <TableHead headNames={historyHeaderNames} active={1} />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
    </Styled.Container>
  );
};

export default AirRemovalHistory;
