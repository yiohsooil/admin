import { Theme } from '../../styles/theme';
import { PumpType } from '../../types';
import * as Highcharts from 'highcharts';

type xAxisType = {
  fromToDate: PumpType.fromToDateProps;
  diffDays: number;
};

const xAxis = ({ fromToDate, diffDays }: xAxisType) => {
  return {
    type: 'datetime',
    opposite: true,
    labels: {
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        const date = new Date(this.value);
        const hours = date.getUTCHours();
        if (hours === 0 && date.getUTCDate() !== fromToDate.fromDate.date()) {
          return Highcharts.dateFormat(
            `${'%Y-%m-%d <br />'}24:00`,
            this.value as number
          );
        }
        return Highcharts.dateFormat(
          `${'%Y-%m-%d<br />'}%H:%M`,
          this.value as number
        );
      },
    },
    min: Date.UTC(
      fromToDate.fromDate.year(),
      fromToDate.fromDate.month() + 1,
      fromToDate.fromDate.date(),
      0,
      0,
      0
    ),
    max: Date.UTC(
      fromToDate.toDate.year(),
      fromToDate.toDate.month() + 1,
      fromToDate.toDate.date() + 1,
      0,
      0,
      0
    ),
    tickPixelInterval: 180,
    tickLength: 0,
    offset: 0,
    lineColor: Theme.colors.gray300,
    lineWidth: 2,
  };
};

export default xAxis;
