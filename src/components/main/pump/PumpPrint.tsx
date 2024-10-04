import React, { forwardRef } from 'react';
import { Styled } from '../../../styles/main/pump';
import TableContainer from '../TableContainer';
import TableHead from '../TableHead';
import {
  alarmHistoryHeaderNames,
  historyHeaderNames,
} from '../../../constants/tableHeaders';
import { PumpType } from '../../../types';

const PumpPrint = forwardRef<HTMLDivElement, PumpType.PumpPrintProps>(
  (props, ref) => {
    const { row } = props;
    return (
      <Styled.PumpPrintContainer>
        <Styled.PumpListContainer ref={ref}>
          <Styled.PumpTitle>펌프 사용 내역</Styled.PumpTitle>
          <Styled.PumpWrapper>
            <Styled.PumpHistoryTitle>주입이력</Styled.PumpHistoryTitle>
            <TableContainer>
              <TableHead headNames={historyHeaderNames} />
            </TableContainer>
          </Styled.PumpWrapper>
          <Styled.PumpWrapper>
            <Styled.PumpHistoryTitle>교체이력</Styled.PumpHistoryTitle>
            <TableContainer>
              <TableHead headNames={historyHeaderNames} />
            </TableContainer>
          </Styled.PumpWrapper>
          <Styled.PumpWrapper>
            <Styled.PumpHistoryTitle>공기빼기</Styled.PumpHistoryTitle>
            <TableContainer>
              <TableHead headNames={historyHeaderNames} />
            </TableContainer>
          </Styled.PumpWrapper>
          <Styled.PumpHistoryTitle>알람이력</Styled.PumpHistoryTitle>
          <Styled.PumpWrapper>
            <TableContainer>
              <TableHead headNames={alarmHistoryHeaderNames} />
            </TableContainer>
          </Styled.PumpWrapper>
        </Styled.PumpListContainer>
      </Styled.PumpPrintContainer>
    );
  }
);

export default PumpPrint;
