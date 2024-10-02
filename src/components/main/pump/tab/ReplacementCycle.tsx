import React from 'react';
import PeriodSearch from '../PeriodSearch';
import { tab } from '../../../../types';

const ReplacementCycle = ({ index }: tab.TabProps) => {
  return <PeriodSearch>ReplacementCycle {index}</PeriodSearch>;
};

export default ReplacementCycle;
