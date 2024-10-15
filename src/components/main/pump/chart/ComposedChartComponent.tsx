import React, { useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from 'recharts';
import Checkboxs from './Checkboxs';
import CustomTooltip from './CustomTooltip';
import { PumpType } from '../../../../types';
import { useCharts } from '../../../../service/hooks/useCharts';

interface ComposedChartProps {
  fromToDate: PumpType.fromToDateProps;
}

const data = [
  { time: '00:00', basal: 0.2, meal: 1.2, glucose: 150, cgm: 140 },
  { time: '01:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  { time: '02:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  { time: '03:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  { time: '04:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  { time: '05:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  { time: '06:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  { time: '07:00', basal: 0.3, meal: 1.0, glucose: 145, cgm: 135 },
  // 더 많은 데이터...
];

export type ShowType = 'basal' | 'meal' | 'glucose' | 'cgm';
interface ShowProps {
  basal: boolean;
  meal: boolean;
  glucose: boolean;
  cgm: boolean;
}

const legendFormatter = (value: ShowType) => {
  switch (value) {
    case 'basal':
      return '기초주입';
    case 'meal':
      return '식사주입';
    case 'glucose':
      return '혈당';
    case 'cgm':
      return 'CGM';
    default:
      return value;
  }
};

const ComposedChartComponent = ({ fromToDate }: ComposedChartProps) => {
  const { data: basalData } = useCharts({
    startDate: fromToDate.fromDate,
    endDate: fromToDate.toDate,
    type: 'basal',
  });
  console.log('data', basalData);

  const [show, setShow] = useState<ShowProps>({
    basal: true,
    meal: true,
    glucose: true,
    cgm: true,
  });

  const handleCheckbox = (type: ShowType) => {
    setShow((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <>
      <Checkboxs
        basal={show.basal}
        meal={show.meal}
        glucose={show.glucose}
        cgm={show.cgm}
        handleCheckbox={handleCheckbox}
      />

      <ResponsiveContainer
        width="100%"
        height={400}
        style={{
          padding: '0 20px 0 0',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" fontSize={14} />
          {/* 왼쪽 Y축: 인슐린 주입량 (단위: u) */}
          <YAxis
            yAxisId="left"
            domain={[0, 50]}
            tickCount={12}
            tickFormatter={(value) => `${value} u`}
            fontSize={14}
          />

          {/* 오른쪽 Y축: 혈당 (단위: mg/dL) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 300]}
            tickCount={4}
            tickFormatter={(value) => `${value} mg/dL`}
            fontSize={14}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="right"
            wrapperStyle={{ marginBottom: -20 }}
            formatter={legendFormatter}
          />

          {/* 기초 주입: 에어리어 차트 */}
          {show.basal && (
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="basal"
              fill="#8884d8"
              stroke="#8884d8"
            />
          )}

          {/* 식사 주입: 바 차트 */}
          {show.meal && (
            <Bar
              yAxisId="left"
              type="monotone"
              dataKey="meal"
              stroke="#82ca9d"
              barSize={30}
            />
          )}

          {/* 혈당: 점 차트 */}
          {show.glucose && (
            <Scatter yAxisId="right" dataKey="glucose" fill="#ff7300" />
          )}

          {/* CGM: 추가적인 라인 차트 */}
          {show.cgm && (
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cgm"
              stroke="#387908"
              dot={{ r: 2 }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default ComposedChartComponent;
