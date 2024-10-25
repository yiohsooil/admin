import { Theme } from '../../styles/theme';

const yAxis = [
  {
    title: {
      text: '',
    },
    top: '0%',
    height: '55%',
    opposite: true,
    min: 0,
    max: 500,
    labels: {
      format: '{value}', // 혈당 값 표시
      align: 'left',
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        return this.value === 0 ? '' : this.value;
      },
    },
    gridLineWidth: 0, // Y축 보조선 제거
    tickPositions: [0, 70, 200, 300], // 직접 눈금 설정
    plotBands: [
      {
        from: 0,
        to: 100,
        color: Theme.colors.white,
        border: '#000000',
      },
      {
        from: 70,
        to: 200,
        color: Theme.colors.safetyOverlay30, // 녹색 영역 - 중간
      },
      {
        from: 200,
        to: 300,
        color: Theme.colors.white,
      },
    ],
    plotLines: [
      // {
      //   color: Theme.colors.gray300,
      //   width: 2,
      //   value: 300,
      //   zIndex: 3,
      // },
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
    top: '60%',
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
  {
    title: {
      text: '',
    },
    min: 0,
    max: 10,
    top: '90%', // 맨 위에 위치하도록 설정
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
];

export default yAxis;
