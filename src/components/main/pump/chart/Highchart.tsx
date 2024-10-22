import React, { useEffect, useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { PumpType } from '../../../../types';
import Options from '../../../../utils/chart';

HighchartsAccessibility(Highcharts);

interface HighchartProps {
  fromToDate: PumpType.fromToDateProps;
}

const Highchart = ({ fromToDate }: HighchartProps) => {
  const [diffDays, setDiffDays] = useState<number>(0);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  // const { data: basalData } = useCharts({
  //   startDate: fromToDate.fromDate,
  //   endDate: fromToDate.toDate,
  //   type: 'basal',
  // });

  useEffect(() => {
    const diffInDays = fromToDate.toDate.diff(fromToDate.fromDate, 'day');
    setDiffDays(diffInDays);
  }, [fromToDate]);

  const cgmData = [
    [Date.UTC(2024, 10, 22, 1), 110],
    [Date.UTC(2024, 10, 22, 2), 150],
    [Date.UTC(2024, 10, 22, 3), 180],
    [Date.UTC(2024, 10, 22, 4), 220],
    [Date.UTC(2024, 10, 22, 5), 130],
    [Date.UTC(2024, 10, 22, 6), 110],
    [Date.UTC(2024, 10, 22, 7), 150],
    [Date.UTC(2024, 10, 22, 8), 180],
    [Date.UTC(2024, 10, 22, 9), 220],
    [Date.UTC(2024, 10, 22, 10), 130],
    [Date.UTC(2024, 10, 22, 11), 90],
    [Date.UTC(2024, 10, 22, 12), 80],
    [Date.UTC(2024, 10, 22, 13), 70],
    [Date.UTC(2024, 10, 22, 14), 60],
    [Date.UTC(2024, 10, 22, 15), 50],
    [Date.UTC(2024, 10, 22, 16), 40],
    [Date.UTC(2024, 10, 22, 17), 80],
    [Date.UTC(2024, 10, 22, 18), 100],
    [Date.UTC(2024, 10, 22, 19), 220],
  ];

  const basalData = [
    [Date.UTC(2024, 10, 22, 1), 1],
    [Date.UTC(2024, 10, 22, 2), 1.5],
    [Date.UTC(2024, 10, 22, 3), 1.8],
    [Date.UTC(2024, 10, 22, 4), 2.2],
    [Date.UTC(2024, 10, 22, 5), 1.3],
    [Date.UTC(2024, 10, 22, 6), 1.1],
    [Date.UTC(2024, 10, 22, 7), 2.5],
    [Date.UTC(2024, 10, 22, 8), 1.8],
    [Date.UTC(2024, 10, 22, 9), 2.2],
    [Date.UTC(2024, 10, 22, 10), 3],
    [Date.UTC(2024, 10, 22, 11), 5],
    [Date.UTC(2024, 10, 22, 12), 8],
    [Date.UTC(2024, 10, 22, 13), 7],
    [Date.UTC(2024, 10, 22, 14), 6],
    [Date.UTC(2024, 10, 22, 15), 5],
    [Date.UTC(2024, 10, 22, 16), 4],
    [Date.UTC(2024, 10, 22, 17), 8],
    [Date.UTC(2024, 10, 22, 18), 10],
    [Date.UTC(2024, 10, 22, 19), 2.2],
  ];

  const bolusData = [
    [Date.UTC(2024, 10, 22, 7), 8],
    [Date.UTC(2024, 10, 22, 12), 8],
    [Date.UTC(2024, 10, 22, 17), 8],
  ];

  const bolusIconData = [
    [Date.UTC(2024, 10, 22, 7), 10],
    [Date.UTC(2024, 10, 22, 12), 10],
    [Date.UTC(2024, 10, 22, 17), 10],
  ];

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartComponentRef}
        options={{
          ...Options({
            fromToDate,
            diffDays,
            cgmData,
            basalData,
            bolusData,
            bolusIconData,
          }),
        }}
      />
    </>
  );
};

export default Highchart;
