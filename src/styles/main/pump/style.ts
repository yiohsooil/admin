import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled.div`
  width: 80vw;
  min-width: 850px;
`;

export const PumpListContainer = styled.div`
  width: 100%;
`;

export const PumpPrintContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`;

export const PumpWrapper = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
`;

export const PrintButton = styled.button``;

export const PumpTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const PumpHistoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
