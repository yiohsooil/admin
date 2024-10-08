import React from 'react';
import { Styled } from '../../../styles/tab';
import { MainType } from '../../../types';

const PumpTableHead = ({ headNames, active = 0 }: MainType.TableHeadProps) => {
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

export default PumpTableHead;
