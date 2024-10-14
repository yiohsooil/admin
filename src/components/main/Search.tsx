import React from 'react';
import { Styled } from '../../styles/main/search';
import { MainType } from '../../types';
import { Constants } from '../../constants/search';

const Search = ({
  searchValue,
  handleChangeSearchValue,
}: MainType.SearchProps) => {
  return (
    <Styled.SearchContainer>
      <Styled.SearchSelect>
        <Styled.SearchOption>{Constants.SEARCH.ALL}</Styled.SearchOption>
        <Styled.SearchOption>{Constants.SEARCH.NAME}</Styled.SearchOption>
        <Styled.SearchOption>{Constants.SEARCH.PUMP}</Styled.SearchOption>
      </Styled.SearchSelect>
      <Styled.SearchInput
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <Styled.SearchButton>{Constants.SEARCH.SEARCH}</Styled.SearchButton>
    </Styled.SearchContainer>
  );
};

export default Search;
