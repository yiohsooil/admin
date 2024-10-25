import chart from './chart';
import title from './title';
import legend from './legend';
import xAxis from './xAxis';
import yAxis from './yAxis';
import series, { SeriesType } from './series';
import { PumpType } from '../../types';
import plotOptions from './plotOptions';
import tooltip from './tooltip';

interface OptionsProps extends SeriesType {
  fromToDate: PumpType.fromToDateProps;
  diffDays: number;
  handleCgmValue: (value: number, time: string, date: string) => void;
}

const Options = ({
  fromToDate,
  diffDays,
  cgmData,
  basalData,
  bolusData,
  bolusIconData,
  handleCgmValue,
}: OptionsProps) => ({
  chart,
  title,
  tooltip,
  legend,
  xAxis: xAxis({ fromToDate, diffDays }),
  yAxis,
  series: series({
    cgmData,
    basalData,
    bolusData,
    bolusIconData,
    diffDays,
    handleCgmValue,
  }),
  plotOptions: plotOptions({ diffDays }),
});

export default Options;
