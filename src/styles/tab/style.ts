import styled from '@emotion/styled';
import { TableHead, TableRow } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

export const Container = styled.div``;

export const PumpHistoryWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 50px 0 50px;
`;

export const PumpHistoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  background-color: #eee;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  border: 1px solid rgba(224, 224, 224, 1);
  border-bottom: none;
`;
export const CustomTableHead = styled(TableHead)`
  & th:last-child {
    border-right: none !important;
  }
`;

export const CustomTableBody = styled(TableBody)``;
export const CustomTableCell = styled(TableCell)`
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
  }
  padding: 10px;
`;
export const CustomTableRow = styled(TableRow)<{
  checked?: boolean;
  status?: string;
}>`
  background-color: ${({ checked }) => (checked ? '#1890ff' : '#fff')};
  & th,
  td {
    color: ${({ checked }) => (checked ? '#fff' : '#000')};
  }
  &:last-child th,
  &:last-child td {
    border-right: 1px solid #ccc;
  }

  &:last-child td:last-child {
    border-right: none;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
