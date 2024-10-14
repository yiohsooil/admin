import React from 'react';
import { Styled } from '../../styles/main/table';
import Size from './Size';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Pagination from './Pagination';
import TableContainer from './TableContainer';
import { MainType } from '../../types';
import { Constants } from '../../constants/table';

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
          <Styled.MenuTitle>{Constants.TABLE.CUSTOMER}</Styled.MenuTitle>
          <Size limit={limit} handleChangeLimit={handleChangeLimit} />
        </Styled.MenuWrapper>
        <Styled.TableWrapper>
          <TableContainer>
            <TableHead headNames={Constants.mainTableHeaderNames} />
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
