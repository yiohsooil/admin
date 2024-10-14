import React from 'react';
import { Styled } from '../../../styles/tab';
import { PumpDataProps } from './tab/AirRemovalHistory';
import { CheckedProps } from '../../../utils/isChecked';
import { Constants } from '../../../constants/table';

interface PumpTableBodyProps {
  data: PumpDataProps[];
  handleChecked?: ({ prevData, data }: CheckedProps) => boolean;
  type?: 'ReplacementCycle' | 'AirRemovalHistory';
  isPrint?: boolean;
  isPrintText?: string;
  children?: React.ReactNode;
}

const PumpTableBody = ({
  data,
  handleChecked,
  type,
  isPrint = false,
  isPrintText,
  children,
}: PumpTableBodyProps) => {
  return (
    <Styled.CustomTableBody>
      {data ? (
        data?.map((pumpData: PumpDataProps, index: number) => {
          return (
            <Styled.CustomTableRow
              key={pumpData.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              checked={
                index !== 0
                  ? type === 'ReplacementCycle'
                    ? handleChecked &&
                      handleChecked({
                        prevData: data[index - 1],
                        data: pumpData,
                      })
                    : handleChecked && handleChecked({ data: pumpData })
                  : false
              }
            >
              <Styled.CustomTableCell component="th" scope="row" align="center">
                {`${pumpData.month}/${pumpData.day}`}
              </Styled.CustomTableCell>
              <Styled.CustomTableCell align="center">
                {pumpData.hour > 11
                  ? `${Constants.TABLE.PM} ${pumpData.hour
                      .toString()
                      .padStart(2, '0')}:${pumpData.min
                      .toString()
                      .padStart(2, '0')}`
                  : `${Constants.TABLE.AM} ${pumpData.hour
                      .toString()
                      .padStart(2, '0')}:${pumpData.min
                      .toString()
                      .padStart(2, '0')}`}
              </Styled.CustomTableCell>
              <Styled.CustomTableCell align="center">
                {`${Math.floor(pumpData.value * 0.1 * 0.1)}u`}
              </Styled.CustomTableCell>
              {pumpData.code ? (
                <Styled.CustomTableCell align="center">
                  {pumpData.code}
                </Styled.CustomTableCell>
              ) : null}
            </Styled.CustomTableRow>
          );
        })
      ) : (
        <Styled.CustomTableRow>
          <Styled.CustomTableCell
            component="th"
            scope="row"
            align="center"
            colSpan={6}
          >
            {Constants.TABLE.NO_DATA}
          </Styled.CustomTableCell>
        </Styled.CustomTableRow>
      )}
      {data?.length > 0 && isPrint ? (
        <Styled.CustomTableRow>
          <Styled.CustomTableCell align="center" style={{ fontWeight: 'bold' }}>
            {Constants.PRINT.EVALUATION_LABEL}
          </Styled.CustomTableCell>
          <Styled.CustomTableCell
            align="center"
            colSpan={2}
            style={{ fontWeight: 'bold' }}
          >
            {isPrintText}
          </Styled.CustomTableCell>
        </Styled.CustomTableRow>
      ) : null}
    </Styled.CustomTableBody>
  );
};

export default PumpTableBody;
