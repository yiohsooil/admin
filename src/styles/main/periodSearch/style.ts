import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Theme } from '../../theme';

export const Container = styled.div`
  width: 95%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Theme.colors.gray300};
  border-top: none;
  margin: 0 auto;
`;

export const SearchWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  padding: 0 60px;
`;

export const Label = styled.label`
  box-sizing: border-box;
  width: 100px;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid ${Theme.colors.gray300};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
export const InputnWrapper = styled.div``;

export const Input = styled.input`
  border: 1px solid ${Theme.colors.gray300};
  padding: 8px 12px;
`;
export const Span = styled.span`
  padding: 0 10px;
  font-size: 0.8rem;
`;

export const CustomButtonGroup = styled(ButtonGroup)`
  margin: 0 30px;
  box-sizing: border-box;
  display: flex;
`;
export const CustomButton = styled(Button)`
  box-sizing: border-box;
`;
export const SearchButtonWrapper = styled.div``;
