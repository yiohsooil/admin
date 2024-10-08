import { fetchPumpHistory } from '../../../service/api';

export interface TabProps extends fetchPumpHistory {
  index: number;
  handlePageChange: ({ page, type }: HandlePageChangeProps) => void;
}

export interface HandlePageChangeProps {
  page: number;
  type: string;
}
