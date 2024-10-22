import chart from './chart';
import title from './title';
import legend from './legend';
import xAxis from './xAxis';
import yAxis from './yAxis';
import series, { SeriesType } from './series';
import { PumpType } from '../../types';
import plotOptions from './plotOptions';

interface OptionsProps extends SeriesType {
  fromToDate: PumpType.fromToDateProps;
  diffDays: number;
}

const Options = ({
  fromToDate,
  diffDays,
  cgmData,
  basalData,
  bolusData,
  bolusIconData,
}: OptionsProps) => ({
  chart,
  title,
  legend,
  xAxis: xAxis({ fromToDate, diffDays }),
  yAxis,
  series: series({ cgmData, basalData, bolusData, bolusIconData, diffDays }),
  plotOptions: plotOptions({ diffDays }),
});

export default Options;
