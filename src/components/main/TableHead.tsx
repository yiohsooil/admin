import React from 'react';
import { Styled } from '../../styles/main/table';
import { MainType } from '../../types';

const TableHead = ({ headNames, active = 0 }: MainType.TableHeadProps) => {
  return (
    <Styled.CustomTableHead active={active}>
      <Styled.CustomTableRow>
        {headNames.map((name) => (
          <Styled.CustomTableCell align="center" key={name}>
            {name}
          </Styled.CustomTableCell>
        ))}
      </Styled.CustomTableRow>
    </Styled.CustomTableHead>
  );
};

export default TableHead;
