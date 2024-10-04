import React from 'react';
import { Styled } from '../../styles/main/table';
import Size from './Size';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Pagination from './Pagination';
import { mainTableHeaderNames } from '../../constants/tableHeaders';
import TableContainer from './TableContainer';
import { MainType } from '../../types';

const Table = ({
  rows,
  totalPage,
  page,
  limit,
  handlePageChange,
  handleChangeLimit,
}: MainType.TableProps) => {
  return (
    <Styled.InnerContainer>
      <Styled.MainContainer>
        <Styled.MenuWrapper>
          <Styled.MenuTitle>고객관리</Styled.MenuTitle>
          <Size limit={limit} handleChangeLimit={handleChangeLimit} />
        </Styled.MenuWrapper>
        <Styled.TableWrapper>
          <TableContainer>
            <TableHead headNames={mainTableHeaderNames} />
            <TableBody rows={rows} />
          </TableContainer>
        </Styled.TableWrapper>
        <Pagination
          rows={rows}
          totalPage={totalPage}
          page={page}
          handlePageChange={handlePageChange}
        />
      </Styled.MainContainer>
    </Styled.InnerContainer>
  );
};

export default Table;
