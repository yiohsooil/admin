import React from 'react';
import Styled from '../../styles/main/table';
import { main } from '../../types';

const Size = ({ limit, handleChangeLimit }: main.SizeProps) => {
  return (
    <Styled.CustomFormControl>
      <Styled.CustomInputLabel id="demo-simple-select-label">
        Limit
      </Styled.CustomInputLabel>
      <Styled.CustomSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limit.toString()}
        label="Limit"
        onChange={handleChangeLimit}
      >
        <Styled.CustomMenuItem value={10}>10</Styled.CustomMenuItem>
        <Styled.CustomMenuItem value={20}>20</Styled.CustomMenuItem>
        <Styled.CustomMenuItem value={30}>30</Styled.CustomMenuItem>
        <Styled.CustomMenuItem value={40}>40</Styled.CustomMenuItem>
        <Styled.CustomMenuItem value={50}>50</Styled.CustomMenuItem>
      </Styled.CustomSelect>
    </Styled.CustomFormControl>
  );
};

export default Size;
