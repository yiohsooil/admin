import { Theme } from '../../styles/theme';

const yAxis = [
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
        color: Theme.colors.grayOverlay200,
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
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        return this.value === 0 ? '' : this.value;
      },
    },
    gridLineWidth: 0, // Y축 보조선 제거
    tickAmount: 4, // 기본적으로 4개의 눈금을 표시하도록 설정
    plotBands: [
      {
        from: 0,
        to: 100,
        color: Theme.colors.white,
      },
      {
        from: 100,
        to: 200,
        color: Theme.colors.grayOverlay200, // 녹색 영역 - 중간
      },
      {
        from: 200,
        to: 300,
        color: Theme.colors.white,
      },
    ],
    plotLines: [
      {
        color: Theme.colors.gray300,
        width: 2,
        value: 300,
        zIndex: 3,
      },
      {
        color: Theme.colors.gray300,
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
        color: Theme.colors.gray300,
        width: 2,
        value: 0,
        zIndex: 3,
      },
    ],
  },
];

export default yAxis;
