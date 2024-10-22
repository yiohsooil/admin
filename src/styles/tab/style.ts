import styled from '@emotion/styled';
import { TableHead, TableRow } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Theme } from '../theme';

export const Container = styled.div``;

export const PumpHistoryWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 80px 0px 80px;
`;

export const PumpHistoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  background-color: ${Theme.colors.gray100};
  width: 100%;
  padding: 15px 0;
  text-align: center;
  border: 1px solid ${Theme.colors.grayOverlay100};
  border-bottom: none;
`;
export const CustomTableHead = styled(TableHead)`
  & th:last-child {
    border-right: none !important;
  }
`;

export const CustomTableBody = styled(TableBody)``;
export const CustomTableCell = styled(TableCell)`
  width: auto;
  min-width: 150px;
  border-right: 1px solid ${Theme.colors.gray300};
  &:last-child {
    border-right: none;
  }
  padding: 10px;
  font-size: 16px;
`;
export const CustomTableRow = styled(TableRow)<{
  checked?: boolean;
  status?: string;
}>`
  background-color: ${({ checked }) =>
    checked ? Theme.colors.blue500 : Theme.colors.white};
  & th,
  td {
    color: ${({ checked }) =>
      checked ? Theme.colors.white : Theme.colors.black};
  }
  &:last-child th,
  &:last-child td {
    border-right: 1px solid ${Theme.colors.gray300};
  }

  &:last-child td:last-child {
    border-right: none;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
