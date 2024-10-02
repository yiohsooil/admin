import React from 'react';
import PeriodSearch from '../PeriodSearch';
import { tab } from '../../../../types';

const AirRemovalHistory = ({ index }: tab.TabProps) => {
  return <PeriodSearch>AirRemovalHistory {index}</PeriodSearch>;
};

export default AirRemovalHistory;
