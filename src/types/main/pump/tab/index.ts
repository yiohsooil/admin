import { fetchPumpHistory } from '../../../service/api';

export interface TabProps extends fetchPumpHistory {
  index: number;
}
