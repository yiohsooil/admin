import React from 'react';
import PeriodSearch from '../PeriodSearch';
import { tab } from '../../../../types';

const AlarmHistory = ({ index }: tab.TabProps) => {
  return <PeriodSearch>AlarmHistory {index}</PeriodSearch>;
};

export default AlarmHistory;
