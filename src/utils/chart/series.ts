import meal from '../../assets/meal.svg';
import bolus from '../../assets/bolus.svg';
import { Theme } from '../../styles/theme';
import zIndex from '@mui/material/styles/zIndex';

export type SeriesType = {
  cgmData: number[][];
  basalData: number[][];
  bolusData: number[][];
  bolusIconData: number[][];
  diffDays: number;
};

const series = ({
  cgmData,
  basalData,
  bolusData,
  bolusIconData,
  diffDays,
}: SeriesType) => [
  {
    name: 'CGM',
    type: 'areaspline',
    marker: {
      enabled: false,
    },
    data: cgmData,
    yAxis: 1,
    threshold: 100, // 기준값 설정
    zones: [
      {
        value: 100, // 100 이하일 때
        color: Theme.colors.danger, // 빨간색 라인
        fillColor: Theme.colors.dangerOverlay30, // 빨간색으로 채우기
      },
      {
        value: 200, // 100 초과 200 이하일 때
        color: Theme.colors.safety, // 녹색 라인
        fillColor: Theme.colors.safetyOverlay30, // 녹색으로 채우기
      },
      {
        value: Number.MAX_VALUE, // 200 초과일 때
        color: Theme.colors.warning, // 노란색 라인
        fillColor: Theme.colors.warningOverlay30, // 노란색으로 채우기
      },
    ],
  },
  {
    name: '기초주입',
    type: 'area',
    step: 'center',
    color: Theme.colors.basal,
    marker: {
      enabled: false,
    },
    data: basalData,
    yAxis: 2,
    lineWidth: 0,
  },
  {
    name: '식사주입',
    type: 'column',
    color: Theme.colors.bolus,
    marker: {
      enabled: true,
    },
    data: bolusData,
    yAxis: 2,
    lineWidth: 0,
    dataLabels: {
      enabled: true,
      useHTML: true,
      align: 'center',
      y: 14 + diffDays * 1.5,
      formatter: function () {
        return `<div style="text-align: center; position: relative; z-index: 100"><img src=${bolus} style="width: ${
          40 - diffDays * 2.5
        }px; height: ${40 - diffDays * 2.5}px;" /></div>`;
      },
    },
  },
  {
    name: '',
    type: 'scatter',
    marker: {
      enabled: false,
    },
    data: bolusIconData,
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
      y: 1 + diffDays * 1.5,
      formatter: function () {
        return `<div style="text-align: center;"><img src=${meal} style="width: ${
          40 - diffDays * 2.5
        }px; height: ${40 - diffDays * 2.5}px;" /></div>`;
      },
    },
  },
];

export default series;
