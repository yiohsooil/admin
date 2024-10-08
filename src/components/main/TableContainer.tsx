import React from 'react';
import { Styled } from '../../styles/main/table';
import Paper from '@mui/material/Paper';
import { MainType } from '../../types';

const TableContainer = ({ children }: MainType.TableContainerProps) => {
  return (
    <Styled.CustomTableContainer component={Paper}>
      <Styled.CustomTable sx={{ minWidth: 660 }}>{children}</Styled.CustomTable>
    </Styled.CustomTableContainer>
  );
};

export default TableContainer;
