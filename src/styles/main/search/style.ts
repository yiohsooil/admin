import styled from '@emotion/styled';
import { Theme } from '../../theme';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Theme.colors.white};
  height: 70px;
  padding-left: 50px;
  gap: 10px;
  border-bottom: 1px solid ${Theme.colors.blackOverlay10};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const SearchSelect = styled.select`
  width: 100px;
  height: 36px;
  padding-left: 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${Theme.colors.blackOverlay20};
  border-radius: 4px;
`;
export const SearchOption = styled.option``;

export const SearchInput = styled.input`
  width: 310px;
  padding: 10px 15px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid ${Theme.colors.blackOverlay20};
  border-radius: 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  background: ${Theme.colors.mainBlue};
  color: ${Theme.colors.white};
  border: none;
  outline: none;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
`;
