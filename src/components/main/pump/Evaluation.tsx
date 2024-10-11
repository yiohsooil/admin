import React, { ChangeEvent } from 'react';
import { Styled } from '../../../styles/main/pump';

interface EvaluationProps {
  label: string;
  value: string;
  readonly?: boolean;
  handleEvaluationChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  fixedHeight?: boolean;
}

const Evaluation = ({
  label,
  value,
  readonly = false,
  handleEvaluationChange,
  fixedHeight = true,
}: EvaluationProps) => {
  return (
    <Styled.EvaluationWrapper fixedHeight={fixedHeight}>
      <Styled.EvaluationLabel fixedHeight={fixedHeight}>
        {label}
      </Styled.EvaluationLabel>
      <Styled.EvaluationTextArea
        value={value}
        readOnly={readonly}
        onChange={handleEvaluationChange}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = 'auto';
          target.style.height = `${target.scrollHeight}px`;
        }}
        fixedHeight={fixedHeight}
      ></Styled.EvaluationTextArea>
    </Styled.EvaluationWrapper>
  );
};

export default Evaluation;
