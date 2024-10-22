type PlotOptionsType = {
  diffDays: number;
};

const plotOptions = ({ diffDays }: PlotOptionsType) => ({
  series: {
    showInLegend: true,
    accessibility: {
      exposeAsGroupOnly: true,
    },
  },
  column: {
    borderWidth: 0, // 막대 주변의 흰선 제거
    pointWidth: 25 - diffDays * 2.5, // 컬럼의 넓이를 20 픽셀로 고정
  },
});

export default plotOptions;
