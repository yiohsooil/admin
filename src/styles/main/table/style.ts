import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer, {
  TableContainerProps,
} from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #eef7ff;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  height: calc(100% -70px);
`;

export const MainContainer = styled.main`
  width: 100%;
  margin-top: 70px;
  padding: 30px 30px 50px 30px;
  overflow-y: auto;
  height: calc(100% -70px);
  box-sizing: border-box;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const CustomFormControl = styled(FormControl)``;
export const CustomInputLabel = styled(InputLabel)``;
export const CustomSelect = styled(Select)``;
export const CustomMenuItem = styled(MenuItem)``;

export const TableWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  height: auto;
`;

export const CustomTableContainer = styled(TableContainer)<TableContainerProps>`
  overflow-x: hidden;
`;
export const CustomTable = styled(Table)``;
export const CustomTableBody = styled(TableBody)``;
export const CustomTableCell = styled(TableCell)<{ active?: number }>`
  cursor: ${({ active }) => (active === 1 ? 'pointer' : 'default')};
  color: ${({ active }) => (active === 1 ? '#1890ff' : '#000')};
  transition: all 0.2s ease-out;
`;
export const CustomTableHead = styled(TableHead)<{ active?: number }>`
  & th {
    border-right: 1px solid ${({ active }) => (active === 1 ? '#ccc' : 'none')};
  }
  & th:last-child {
    border-right: none;
  }
`;

export const CustomTableRow = styled(TableRow)<{ active?: number }>`
  transition: all 0.2s ease-out;
  &:hover {
    background-color: ${({ active }) =>
      active === 1 ? 'rgba(0,0,0,0.05)' : 'none'};
  }
`;
export const CustomSwitch = styled(Switch)`
  width: 28px;
  height: 16px;
  padding: 0;
  display: flex;

  &:active .MuiSwitch-thumb {
    width: 15px;
  }

  &:active .MuiSwitch-switchBase.Mui-checked {
    transform: translateX(9px);
  }

  .MuiSwitch-switchBase {
    padding: 2px;

    &.Mui-checked {
      transform: translateX(12px);
      color: #fff;

      & + .MuiSwitch-track {
        opacity: 1;
        background-color: #1890ff;
      }
    }
  }

  .MuiSwitch-thumb {
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: width 200ms;
  }

  .MuiSwitch-track {
    border-radius: 8px;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
