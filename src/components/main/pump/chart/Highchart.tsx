import React, { useEffect, useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { PumpType } from '../../../../types';
import Options from '../../../../utils/chart';
import { generateData } from '../../../../utils/temp';
import { Styled } from '../../../../styles/chart';
import { Theme } from '../../../../styles/theme';

HighchartsAccessibility(Highcharts);

interface HighchartProps {
  fromToDate: PumpType.fromToDateProps;
}

type DataType = {
  cgmData: number[][];
  basalData: number[][];
  bolusData: number[][];
  bolusIconData: number[][];
};

const Highchart = ({ fromToDate }: HighchartProps) => {
  const [diffDays, setDiffDays] = useState<number>(0);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const cgmValueRef = useRef<HTMLDivElement>(null);
  const camTimeRef = useRef<HTMLDivElement>(null);
  const camDateRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DataType>({
    cgmData: [],
    basalData: [],
    bolusData: [],
    bolusIconData: [],
  });
  // const { data: basalData } = useCharts({
  //   startDate: fromToDate.fromDate,
  //   endDate: fromToDate.toDate,
  //   type: 'basal',
  // });

  const handleCgmValue = (value: number, time: string, date: string) => {
    if (cgmValueRef.current) {
      cgmValueRef.current.textContent = value.toString();
      cgmValueRef.current.style.color =
        value > 200
          ? Theme.colors.warning
          : value > 70
          ? Theme.colors.safety
          : Theme.colors.danger;
    }
    if (camTimeRef.current) {
      camTimeRef.current.textContent = time;
    }
    if (camDateRef.current) {
      camDateRef.current.textContent = date;
    }
  };

  useEffect(() => {
    const diffInDays = fromToDate.toDate.diff(fromToDate.fromDate, 'day');
    setDiffDays(diffInDays);
  }, [fromToDate]);

  useEffect(() => {
    const cgmData = generateData.cgmData();
    const basalData = generateData.basalData();
    const bolusData = generateData.bolusData();
    const bolusIconData = generateData.bolusIconData();
    setData({ cgmData, basalData, bolusData, bolusIconData });

    const lastCgmValue = cgmData[cgmData.length - 1][1].toString();
    const lastDate = new Date(cgmData[cgmData.length - 1][0]);

    if (cgmValueRef.current) {
      cgmValueRef.current.textContent = lastCgmValue;
    }
    if (camTimeRef.current) {
      camTimeRef.current.textContent = `${lastDate
        .getUTCHours()
        .toString()
        .padStart(2, '0')}:${lastDate
        .getUTCMinutes()
        .toString()
        .padStart(2, '0')}`;
    }
    if (camDateRef.current) {
      camDateRef.current.textContent = `${lastDate.getUTCFullYear()}년 ${(
        lastDate.getUTCMonth() + 1
      )
        .toString()
        .padStart(2, '0')}월 ${lastDate
        .getUTCDate()
        .toString()
        .padStart(2, '0')}일
        `;
    }
  }, []);

  return (
    <>
      <Styled.CgmWrapper>
        <Styled.CgmDateWrapper>
          <Styled.CgmTime ref={camTimeRef}></Styled.CgmTime>
          <Styled.CgmDate ref={camDateRef}></Styled.CgmDate>
        </Styled.CgmDateWrapper>
        <Styled.CgmValueWrapper>
          <Styled.CgmValue ref={cgmValueRef}></Styled.CgmValue>
          <Styled.Unit>mg/dl</Styled.Unit>
        </Styled.CgmValueWrapper>
      </Styled.CgmWrapper>
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartComponentRef}
        options={{
          ...Options({
            fromToDate,
            diffDays,
            cgmData: data.cgmData,
            basalData: data.basalData,
            bolusData: data.bolusData,
            bolusIconData: data.bolusIconData,
            handleCgmValue,
          }),
        }}
      />
    </>
  );
};

export default Highchart;
