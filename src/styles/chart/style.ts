import styled from '@emotion/styled';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export const Container = styled.div`
  width: 80vw;
  min-width: 850px;
`;

export const CustomFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
export const CustomFormControlLabel = styled(FormControlLabel)``;
export const CustomCheckbox = styled(Checkbox)``;

export const CustomTooltipContainer = styled.div`
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding: 12px 18px;
  gap: 4px;
`;
export const CustomTooltipLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
export const CustomTooltipIntro = styled.p<{ color: string }>`
  font-size: 14px;
  color: ${(props) => props.color};
`;
