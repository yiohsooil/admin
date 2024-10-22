import styled from '@emotion/styled';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Theme } from '../../theme';

export const Container = styled.div`
  width: 80vw;
  min-width: 850px;
`;

export const PumpListContainer = styled.div`
  width: 100%;
`;

export const PumpPrintContainer = styled.div`
  width: 790px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const CustomTypographyWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const CustomTypography = styled(Typography)``;

export const PumpWrapper = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0;
`;

export const PrintButton = styled(Button)`
  width: 100px;
  height: 30px;
  position: absolute;
  right: 0;
`;

export const PumpTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const PumpHistoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  background-color: ${Theme.colors.gray100};
  width: 100%;
  padding: 15px 0;
  text-align: center;
  border: 1px solid ${Theme.colors.grayOverlay100};
  border-bottom: none;
`;

export const UserInfoContainer = styled.div`
  border: 1px solid ${Theme.colors.gray300};
  height: 40px;
  display: flex;
  box-sizing: border-box;
  width: 95%;
  justify-content: center;
  margin: 10px auto;
`;

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
`;
export const LabelText = styled.span`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.gray300};
  font-weight: bold;
  font-size: 14px;
`;
export const ValueText = styled.span`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const PrintWrapper = styled(Box)`
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

export const ModalContainer = styled(Modal)``;
export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 850px;
  min-width: 800px;
  height: 90vh;
  overflow-y: auto;
  background-color: ${Theme.colors.white};
  box-shadow: 0px 4px 24px ${Theme.colors.blackOverlay10};
  padding: 12px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const EvaluationWrapper = styled.div`
  width: 99%;
  height: auto;
  min-height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid ${Theme.colors.gray300};
  margin-top: 20px;
`;
export const EvaluationLabel = styled.div`
  width: 162px;
  height: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
  background-color: ${Theme.colors.white};
`;

export const EvaluationTextArea = styled.textarea`
  flex: 1;
  height: auto;
  min-height: 50px;
  line-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-align: start;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  resize: none;
  overflow: hidden;
  padding: 20px;
  border-left: 1px solid ${Theme.colors.gray300};
`;
