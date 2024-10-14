import React, { ChangeEvent } from 'react';
import { Styled } from '../../../styles/main/pump';

interface EvaluationProps {
  label: string;
  value: string;
  readonly?: boolean;
  handleEvaluationChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Evaluation = ({
  label,
  value,
  readonly = false,
  handleEvaluationChange,
}: EvaluationProps) => {
  return (
    <Styled.EvaluationWrapper>
      <Styled.EvaluationLabel>{label}</Styled.EvaluationLabel>
      <Styled.EvaluationTextArea
        value={value}
        readOnly={readonly}
        onChange={handleEvaluationChange}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = 'auto';
          target.style.height = `${target.scrollHeight}px`;
        }}
      ></Styled.EvaluationTextArea>
    </Styled.EvaluationWrapper>
  );
};

export default Evaluation;
