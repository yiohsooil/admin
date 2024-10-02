import React from 'react';
import Styled from '../../styles/main/table';
import { main } from '../../types';

const TableHead = ({ headNames }: main.TableHeadProps) => {
  return (
    <Styled.CustomTableHead>
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
