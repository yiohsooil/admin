import dayjs from 'dayjs';
import { ChangeEvent } from 'react';
import { main } from '../..';

export interface PeriodSearchProps {
  children: React.ReactNode;
}

export interface DateRangeProps {
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
}

export interface fromToDateProps {
  fromDate: dayjs.Dayjs | null;
  toDate: dayjs.Dayjs | null;
}

export interface HandleFromToDateProps {
  e: ChangeEvent<HTMLInputElement>;
  handleDate: 'fromDate' | 'toDate';
  validCallback: (newDate: dayjs.Dayjs) => boolean;
  conditionalValidCallback: ({ fromDate, toDate }: DateRangeProps) => boolean;
}

export interface PumpProps {
  index: number;
  selectedIndex: number | null;
  state: boolean;
  toggleDrawer: (
    index: number,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  row: main.RowsProps;
}

export interface PumpPrintProps {
  row: main.RowsProps;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabsProps {
  tabOne: JSX.Element;
  tabTwo: JSX.Element;
  tabThree: JSX.Element;
  tabFour: JSX.Element;
}
