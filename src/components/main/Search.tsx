import React from 'react';
import Styled from '../../styles/main/search';
import { main } from '../../types';

const Search = ({ searchValue, handleChangeSearchValue }: main.SearchProps) => {
  return (
    <Styled.SearchContainer>
      <Styled.SearchSelect>
        <Styled.SearchOption>전체</Styled.SearchOption>
        <Styled.SearchOption>이름</Styled.SearchOption>
        <Styled.SearchOption>펌프시리얼</Styled.SearchOption>
      </Styled.SearchSelect>
      <Styled.SearchInput
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <Styled.SearchButton>검색</Styled.SearchButton>
    </Styled.SearchContainer>
  );
};

export default Search;
