import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';

export const Container = styled.div`
  width: 80vw;
  min-width: 85m0px;
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
  // margin-top: 20px;
  background-color: #eee;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  border: 1px solid rgba(224, 224, 224, 1);
  border-bottom: none;
`;

export const UserInfoContainer = styled.div`
  border: 1px solid #ccc;
  height: 30px;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 5px;
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
  border-right: 1px solid #ccc;
  background-color: #ccc;
  font-weight: bold;
  font-size: 14px;
`;
export const ValueText = styled.span`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;
  font-size: 14px;
`;

export const PrintWrapper = styled(Box)`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const ModalContainer = styled(Modal)``;
export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  min-width: 800px;
  height: 90vh;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1); /* 적절한 box-shadow 값으로 변경 */
  padding: 12px 20px;
`;
