import { Theme } from '../../styles/theme';
import { PumpType } from '../../types';
import * as Highcharts from 'highcharts';

type xAxisType = {
  fromToDate: PumpType.fromToDateProps;
  diffDays: number;
};

const xAxis = ({ fromToDate, diffDays }: xAxisType) => {
  const minValue = Date.UTC(
    fromToDate.fromDate.year(),
    fromToDate.fromDate.month(),
    fromToDate.fromDate.date(),
    0,
    0,
    0
  );

  const maxValue = Date.UTC(
    fromToDate.toDate.year(),
    fromToDate.toDate.month(),
    fromToDate.toDate.date() + 1,
    0,
    0,
    0
  );

  return {
    type: 'datetime',
    labels: {
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        const date = new Date(this.value);
        const hours = date.getUTCHours();
        const dayNames = ['일', '월', '화', '수', '목', '금', '토']; // 한국어 요일 배열
        if (hours === 0) {
          const dayOfWeek = dayNames[date.getUTCDay()];
          return Highcharts.dateFormat(
            `${dayOfWeek} ${'%d'}`,
            this.value as number
          );
        }
        return Highcharts.dateFormat(`%H:%M`, this.value as number);
      },
    },
    min: minValue,
    max: maxValue,
    tickInterval:
      (maxValue - minValue) / (24 * 3600 * 1000) <= 3
        ? 6 * 3600 * 1000
        : 24 * 3600 * 1000,
    tickLength: 5,
    offset: 0,
    lineColor: Theme.colors.gray300,
    lineWidth: 2,
    startOnTick: false, // 데이터 시작에 맞게 설정
    endOnTick: false, // 데이터 끝에 맞게 설정
    minPadding: 0, // 왼쪽 여백 제거
    maxPadding: 0, // 오른쪽 여백 제거
  };
};

export default xAxis;
