import React from 'react';
import { Styled } from '../../../../styles/chart';
import { ShowType } from './ComposedChartComponent';

interface CheckboxsProps {
  basal: boolean;
  meal: boolean;
  glucose: boolean;
  cgm: boolean;
  handleCheckbox: (type: ShowType) => void;
}

const Checkboxs = ({
  basal,
  meal,
  glucose,
  cgm,
  handleCheckbox,
}: CheckboxsProps) => {
  return (
    <Styled.CustomFormGroup>
      <Styled.CustomFormControlLabel
        control={
          <Styled.CustomCheckbox
            checked={basal}
            onChange={() => handleCheckbox('basal')}
          />
        }
        label="기초주입"
      />
      <Styled.CustomFormControlLabel
        control={
          <Styled.CustomCheckbox
            checked={meal}
            onChange={() => handleCheckbox('meal')}
          />
        }
        label="식사주입"
      />
      <Styled.CustomFormControlLabel
        control={
          <Styled.CustomCheckbox
            checked={glucose}
            onChange={() => handleCheckbox('glucose')}
          />
        }
        label="혈당"
      />
      <Styled.CustomFormControlLabel
        control={
          <Styled.CustomCheckbox
            checked={cgm}
            onChange={() => handleCheckbox('cgm')}
          />
        }
        label="CGM"
      />
    </Styled.CustomFormGroup>
  );
};

export default Checkboxs;
