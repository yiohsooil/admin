import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { historyHeaderNames } from '../../../../constants/tableHeaders';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableHead from '../PumpTableHead';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';
import dayjs from 'dayjs';
import { handleChecked } from '../../../../utils/isChecked';

const ReplacementCycle = ({
  index,
  startDate,
  endDate,
  page,
  limit,
  handlePageChange,
}: TabType.TabProps) => {
  const { data, isLoading, isError } = usePumpHistory.useReplacementCycle({
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
        <Styled.PumpHistoryTitle>교체이력</Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={historyHeaderNames} />
          <PumpTableBody
            data={data?.data}
            handleChecked={handleChecked}
            type="ReplacementCycle"
          />
        </TableContainer>
      </Styled.PumpHistoryWrapper>
      <PumpPagination
        data={data?.data}
        count={Math.ceil(data?.items / limit)}
        page={page as number}
        handlePageChange={handlePageChange}
        type="replacementCyclePage"
      />
    </Styled.Container>
  );
};

export default ReplacementCycle;
