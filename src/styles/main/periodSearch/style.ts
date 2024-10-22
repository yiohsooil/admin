import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Theme.colors.gray300};
  padding: 0 25px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  width: 120px;
  height: auto;
  padding: 0 10px;
  box-sizing: border-box;
`;
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
