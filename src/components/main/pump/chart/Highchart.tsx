import React, { useEffect, useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import Checkboxs from './Checkboxs';
import { useCharts } from '../../../../service/hooks/useCharts';
import { PumpType } from '../../../../types';
import bolus from '../../../../assets/bolus.svg';
import meal from '../../../../assets/meal.svg';
import zIndex from '@mui/material/styles/zIndex';

interface HighchartProps {
  fromToDate: PumpType.fromToDateProps;
}

export type ShowType = 'basal' | 'meal' | 'glucose' | 'cgm';
interface ShowProps {
  basal: boolean;
  meal: boolean;
  glucose: boolean;
  cgm: boolean;
}

const Highchart = ({ fromToDate }: HighchartProps) => {
  const [show, setShow] = useState<ShowProps>({
    basal: true,
    meal: true,
    glucose: true,
    cgm: true,
  });
  const [diffDays, setDiffDays] = useState<number>(0);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { data: basalData } = useCharts({
    startDate: fromToDate.fromDate,
    endDate: fromToDate.toDate,
    type: 'basal',
  });

  const handleCheckbox = (type: ShowType) => {
    setShow((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  useEffect(() => {
    const diffInDays = fromToDate.toDate.diff(fromToDate.fromDate, 'day');
    setDiffDays(diffInDays);
  }, [fromToDate]);

  return (
    <>
      {/* <Checkboxs
        basal={show.basal}
        meal={show.meal}
        glucose={show.glucose}
        cgm={show.cgm}
        handleCheckbox={handleCheckbox}
      /> */}
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartComponentRef}
        options={{
          chart: {
            height: 700,
            zoomType: 'xy',
            panning: true,
            panKey: 'shift',
          },
          title: {
            text: '',
          },
          legend: {
            enabled: true,
          },
          tooltip: {
            zIndex: 10,
          },
          xAxis: {
            type: 'datetime',
            opposite: true,
            labels: {
              formatter: function (
                this: Highcharts.AxisLabelsFormatterContextObject
              ) {
                const date = new Date(this.value);
                const hours = date.getUTCHours();
                if (
                  hours === 0 &&
                  date.getUTCDate() !== fromToDate.fromDate.date()
                ) {
                  return Highcharts.dateFormat(
                    `${'%Y-%m-%d <br />'}
                    24:00`,
                    this.value as number
                  );
                }
                return Highcharts.dateFormat(
                  `${'%Y-%m-%d<br />'}
                  %H:%M`,
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
            lineColor: '#ccc',
            lineWidth: 2,
          },
          yAxis: [
            {
              title: {
                text: '',
              },
              min: 0,
              max: 10,
              top: '0%', // 맨 위에 위치하도록 설정
              height: '10%', // 작은 높이로 설정
              labels: {
                enabled: false, // 값은 표시하지 않도록 설정
              },
              gridLineWidth: 0,
              plotBands: [
                {
                  from: 0,
                  to: 10,
                  color: '#eee',
                },
              ],
            },
            {
              title: {
                text: '',
              },
              top: '10%',
              height: '55%',
              opposite: true,
              min: 0,
              max: 300,
              labels: {
                format: '{value}', // 혈당 값 표시
                align: 'left',
                formatter: function (
                  this: Highcharts.AxisLabelsFormatterContextObject
                ) {
                  return this.value === 0 ? '' : this.value;
                },
              },
              gridLineWidth: 0, // Y축 보조선 제거
              tickAmount: 4, // 기본적으로 4개의 눈금을 표시하도록 설정
              plotBands: [
                {
                  from: 0,
                  to: 100,
                  color: '#fff',
                },
                {
                  from: 100,
                  to: 200,
                  color: 'rgba(0, 255, 0, 0.1)', // 녹색 영역 - 중간
                },
                {
                  from: 200,
                  to: 300,
                  color: '#fff',
                },
              ],
              plotLines: [
                {
                  color: '#ccc',
                  width: 2,
                  value: 300,
                  zIndex: 3,
                },
                {
                  color: '#ccc',
                  width: 2,
                  value: 0,
                  zIndex: 3,
                },
              ],
            },
            {
              title: {
                text: '',
              },
              top: '70%',
              height: '30%',
              opposite: true,
              min: 0,
              max: 10,
              tickAmount: 3,
              labels: {
                format: '{value}', // 혈당 값 표시
                align: 'left',
              },
              gridLineWidth: 0, // Y축 보조선 제거
              offset: 0,
              plotLines: [
                {
                  color: '#ccc',
                  width: 2,
                  value: 0,
                  zIndex: 3,
                },
              ],
            },
          ],
          series: [
            {
              name: 'CGM',
              type: 'areaspline',
              marker: {
                enabled: false,
              },
              data: [
                [Date.UTC(2024, 10, 21, 1), 110],
                [Date.UTC(2024, 10, 21, 2), 150],
                [Date.UTC(2024, 10, 21, 3), 180],
                [Date.UTC(2024, 10, 21, 4), 220],
                [Date.UTC(2024, 10, 21, 5), 130],
                [Date.UTC(2024, 10, 21, 6), 110],
                [Date.UTC(2024, 10, 21, 7), 150],
                [Date.UTC(2024, 10, 21, 8), 180],
                [Date.UTC(2024, 10, 21, 9), 220],
                [Date.UTC(2024, 10, 21, 10), 130],
                [Date.UTC(2024, 10, 21, 11), 90],
                [Date.UTC(2024, 10, 21, 12), 80],
                [Date.UTC(2024, 10, 21, 13), 70],
                [Date.UTC(2024, 10, 21, 14), 60],
                [Date.UTC(2024, 10, 21, 15), 50],
                [Date.UTC(2024, 10, 21, 16), 40],
                [Date.UTC(2024, 10, 21, 17), 80],
                [Date.UTC(2024, 10, 21, 18), 100],
                [Date.UTC(2024, 10, 21, 19), 220],
              ],
              yAxis: 1,
              threshold: 100, // 기준값 설정
              color: 'green', // 기본 라인 색상
              negativeColor: 'red',
              zones: [
                {
                  value: 100, // 100 이하일 때
                  color: 'red', // 빨간색 라인
                  fillColor: 'rgba(255, 0, 0, 0.2)', // 빨간색으로 채우기
                },
                {
                  value: 200, // 100 초과 200 이하일 때
                  color: 'green', // 녹색 라인
                  fillColor: 'none', // 녹색으로 채우기
                },
                {
                  value: Number.MAX_VALUE, // 200 초과일 때
                  color: 'yellow', // 노란색 라인
                  fillColor: 'rgba(255, 255, 0, 0.2)', // 노란색으로 채우기
                },
              ],
            },
            {
              name: '기초주입',
              type: 'area',
              step: 'center',
              marker: {
                enabled: false,
              },
              data: [
                [Date.UTC(2024, 10, 21, 1), 1],
                [Date.UTC(2024, 10, 21, 2), 1.5],
                [Date.UTC(2024, 10, 21, 3), 1.8],
                [Date.UTC(2024, 10, 21, 4), 2.2],
                [Date.UTC(2024, 10, 21, 5), 1.3],
                [Date.UTC(2024, 10, 21, 6), 1.1],
                [Date.UTC(2024, 10, 21, 7), 2.5],
                [Date.UTC(2024, 10, 21, 8), 1.8],
                [Date.UTC(2024, 10, 21, 9), 2.2],
                [Date.UTC(2024, 10, 21, 10), 3],
                [Date.UTC(2024, 10, 21, 11), 5],
                [Date.UTC(2024, 10, 21, 12), 8],
                [Date.UTC(2024, 10, 21, 13), 7],
                [Date.UTC(2024, 10, 21, 14), 6],
                [Date.UTC(2024, 10, 21, 15), 5],
                [Date.UTC(2024, 10, 21, 16), 4],
                [Date.UTC(2024, 10, 21, 17), 8],
                [Date.UTC(2024, 10, 21, 18), 10],
                [Date.UTC(2024, 10, 21, 19), 2.2],
              ],
              yAxis: 2,
              lineWidth: 0,
            },
            {
              name: '식사주입',
              type: 'column',
              marker: {
                enabled: true,
              },
              data: [
                [Date.UTC(2024, 10, 21, 7), 8],
                [Date.UTC(2024, 10, 21, 12), 8],
                [Date.UTC(2024, 10, 21, 17), 8],
              ],
              yAxis: 2,
              lineWidth: 0,
              dataLabels: {
                enabled: true,
                useHTML: true,
                align: 'center',
                y: 15,
                formatter: function () {
                  return `<div style="text-align: center;"><img src=${bolus} style="width: 50px; height: 50px;" /></div>`;
                },
              },
            },
            {
              name: '',
              type: 'scatter',
              marker: {
                enabled: false,
              },
              data: [
                [Date.UTC(2024, 10, 21, 7), 10],
                [Date.UTC(2024, 10, 21, 12), 10],
                [Date.UTC(2024, 10, 21, 17), 10],
              ],
              yAxis: 0,
              lineWidth: 0,
              showInLegend: false, // 범례에 표시하지 않도록 설정
              enableMouseTracking: false, // 마우스 추적 비활성화
              tooltip: {
                enabled: false, // 툴팁 비활성화
              },
              dataLabels: {
                enabled: true,
                useHTML: true,
                align: 'center',
                formatter: function () {
                  return `<div style="text-align: center;"><img src=${meal} style="width: 50px; height: 50px;" /></div>`;
                },
              },
            },
          ],
          plotOptions: {
            series: {
              showInLegend: true,
              accessibility: {
                exposeAsGroupOnly: true,
              },
            },
            column: {
              borderWidth: 0, // 막대 주변의 흰선 제거
              pointWidth: 30, // 컬럼의 넓이를 20 픽셀로 고정
            },
          },
        }}
      />
    </>
  );
};

export default Highchart;
