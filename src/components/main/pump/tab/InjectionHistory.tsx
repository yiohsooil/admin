import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { historyHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';
import PumpTableHead from '../PumpTableHead';

const InjectionHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
  handlePageChange,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory.useInjectionHistory({
    startDate,
    endDate,
    page,
    limit,
  });

  if (isLoading) {
    return <div></div>;
  }

  console.log('InjectionHistory data', data);

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>주입이력</Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={historyHeaderNames} />
          <PumpTableBody data={data?.data} />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
      <PumpPagination
        data={data?.data}
        count={Math.ceil(data?.items / limit)}
        page={page as number}
        handlePageChange={handlePageChange}
        type="injectionHistoryPage"
      />
    </Styled.Container>
  );
};

export default InjectionHistory;
