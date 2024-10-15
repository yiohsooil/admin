import React from 'react';
import { TabType } from '../../../../types';
import { Styled } from '../../../../styles/tab';
import TableContainer from '../../TableContainer';
import { usePumpHistory } from '../../../../service/hooks/usePumpHistory';
import PumpTableHead from '../PumpTableHead';
import PumpTableBody from '../PumpTableBody';
import PumpPagination from '../PumpPagination';
import { handleChecked } from '../../../../utils/isChecked';
import { Constants } from '../../../../constants/table';

const ReplacementCycle = ({
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
    type: 'replacementCycle',
  });

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Styled.Container>
      <Styled.PumpHistoryWrapper>
        <Styled.PumpHistoryTitle>
          {Constants.TabNames.REPLACEMENT}
        </Styled.PumpHistoryTitle>
        <TableContainer>
          <PumpTableHead headNames={Constants.historyHeaderNames} />
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
