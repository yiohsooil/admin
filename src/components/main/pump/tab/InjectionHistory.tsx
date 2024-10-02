import React from 'react';
import PeriodSearch from '../PeriodSearch';
import { tab } from '../../../../types';

const InjectionHistory = ({ index }: tab.TabProps) => {
  return <PeriodSearch>InjectionHistory {index}</PeriodSearch>;
};

export default InjectionHistory;
