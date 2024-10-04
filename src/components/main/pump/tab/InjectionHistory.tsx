import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import TableHead from '../../TableHead';
import { historyHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';

const InjectionHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory.useInjectionHistory({
    startDate,
    endDate,
    page,
    limit,
  });

  console.log('InjectionHistory data', data);

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>주입이력</Styled.PumpHistoryTitle>
        <TableContainer>
          <TableHead headNames={historyHeaderNames} active={1} />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
    </Styled.Container>
  );
};

export default InjectionHistory;
