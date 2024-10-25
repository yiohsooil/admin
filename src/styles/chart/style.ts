import styled from '@emotion/styled';
import { Theme } from '../theme';

export const Container = styled.div`
  width: 80vw;
  min-width: 850px;
`;

export const ChartWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px;
`;

export const CgmWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 100px 40px 100px;
`;
export const CgmDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const CgmTime = styled.div`
  color: ${Theme.colors.gray500};
  font-size: 48px;
  font-weight: bold;
`;
export const CgmDate = styled.div`
  background-color: ${Theme.colors.blackOverlay10};
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 8px;
  color: ${Theme.colors.black};
  font-weight: bold;
`;
export const CgmValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CgmValue = styled.div`
  color: ${Theme.colors.safety};
  font-size: 48px;
  font-weight: bold;
`;
export const Unit = styled.div`
  background-color: ${Theme.colors.blackOverlay10};
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 8px;
  color: ${Theme.colors.black};
  font-weight: bold;
`;
