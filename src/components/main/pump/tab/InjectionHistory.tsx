import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';
import PumpTableHead from '../PumpTableHead';
import { Constants } from '../../../../constants/table';

const InjectionHistory = ({
  index,
  startDate,
  endDate,
  page,
  limit,
  handlePageChange,
}: TabType.TabProps) => {
  const { data, isLoading } = usePumpHistory({
    startDate,
    endDate,
    page,
    limit,
    type: 'injectionHistory',
  });

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>
          {Constants.TabNames.INJECTION}
        </Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={Constants.historyHeaderNames} />
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
