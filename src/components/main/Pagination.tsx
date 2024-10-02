import React from 'react';
import Styled from '../../styles/main/table';
import { Pagination as PaginationMUI, Stack } from '@mui/material';
import { main } from '../../types';

const Pagination = ({
  rows,
  totalPage,
  page,
  handlePageChange,
}: main.PaginationProps) => {
  return (
    <Styled.PaginationWrapper>
      {rows ? (
        <Stack>
          <PaginationMUI
            count={totalPage}
            page={page}
            onChange={(event, page: number) => handlePageChange(page)}
          />
        </Stack>
      ) : null}
    </Styled.PaginationWrapper>
  );
};

export default Pagination;
