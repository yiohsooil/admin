import React from 'react';
import { TooltipProps } from 'recharts';
import { Styled } from '../../../../styles/chart';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <Styled.CustomTooltipContainer>
        <Styled.CustomTooltipLabel className="label">
          {`${label}`}시
        </Styled.CustomTooltipLabel>
        <Styled.CustomTooltipIntro
          className="intro"
          color="#8884d8"
        >{`기초주입 : ${
          payload.find((p) => p.dataKey === 'basal')?.value
        } u`}</Styled.CustomTooltipIntro>
        <Styled.CustomTooltipIntro
          className="intro"
          color="#82ca9d"
        >{`식사주입 : ${
          payload.find((p) => p.dataKey === 'meal')?.value
        } u`}</Styled.CustomTooltipIntro>
        <Styled.CustomTooltipIntro className="intro" color="#ff7300">{`혈당 : ${
          payload.find((p) => p.dataKey === 'glucose')?.value
        } mg/dL`}</Styled.CustomTooltipIntro>
        <Styled.CustomTooltipIntro className="intro" color="#387908">{`CGM : ${
          payload.find((p) => p.dataKey === 'cgm')?.value
        } mg/dL`}</Styled.CustomTooltipIntro>
      </Styled.CustomTooltipContainer>
    );
  }
  return null;
};

export default CustomTooltip;
