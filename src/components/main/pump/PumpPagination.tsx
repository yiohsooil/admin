import React from 'react';
import { Styled } from '../../../styles/tab';
import { PumpDataProps } from './tab/AirRemovalHistory';
import { Stack, Pagination as PaginationMUI } from '@mui/material';
import { HandlePageChangeProps } from '../../../types/main/pump/tab';
interface PumpPaginationProps {
  data: PumpDataProps[];
  count: number;
  page: number;
  handlePageChange: ({ page, type }: HandlePageChangeProps) => void;
  type:
    | 'airRemovalHistoryPage'
    | 'alarmHistoryPage'
    | 'injectionHistoryPage'
    | 'replacementCyclePage';
}

const PumpPagination = ({
  data,
  count,
  page,
  handlePageChange,
  type,
}: PumpPaginationProps) => {
  return (
    <Styled.PaginationWrapper>
      {data ? (
        <Stack>
          <PaginationMUI
            count={count}
            page={page as number}
            onChange={(event, page: number) => handlePageChange({ page, type })}
          />
        </Stack>
      ) : null}
    </Styled.PaginationWrapper>
  );
};

export default PumpPagination;
