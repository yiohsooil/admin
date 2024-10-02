import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';

export interface RowsProps {
  name: string;
  birthDate: number;
  contact: number;
  pumpSerial: number;
  lastAccessTime: number;
  loginLimit: boolean;
}

export interface PaginationProps {
  rows: RowsProps[];
  totalPage?: number;
  page?: number;
  handlePageChange: (page: number) => void;
}

export interface TableHeadProps {
  headNames: string[];
}

export interface TableContainerProps {
  children: React.ReactNode;
}

export interface TableBodyProps {
  rows: RowsProps[];
}

export interface TableProps extends PaginationProps {
  limit: number;
  handleChangeLimit: (e: SelectChangeEvent<unknown>) => void;
}

export interface SizeProps {
  limit: number;
  handleChangeLimit: (e: SelectChangeEvent<unknown>) => void;
}

export interface SearchProps {
  searchValue: string;
  handleChangeSearchValue: (value: ChangeEvent<HTMLInputElement>) => void;
}
