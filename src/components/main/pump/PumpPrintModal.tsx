import React, { ChangeEvent, forwardRef, useState } from 'react';
import PrintButton from './PrintButton';
import dayjs from 'dayjs';
import { Styled } from '../../../styles/main/pump';
import { usePumpHistoryPrint } from '../../../service/hooks/usePumpHistoryPrint';
import TableContainer from '../TableContainer';
import PumpTableHead from './PumpTableHead';
import PumpTableBody from './PumpTableBody';
import { PumpDataProps } from './tab/AirRemovalHistory';
import { handleChecked } from '../../../utils/isChecked';
import Evaluation from './Evaluation';
import { Constants } from '../../../constants/table';

interface PumpPrintModalProps {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  handlePrint: () => void;
  children: React.ReactNode;
}

const PumpPrintModal = forwardRef<HTMLDivElement, PumpPrintModalProps>(
  ({ startDate, endDate, handlePrint, children }, ref) => {
    const [open, setOpen] = useState(false);
    const [evaluationValue, setEvaluationValue] = useState<string>('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setEvaluationValue('');
      setOpen(false);
    };

    // TODO 여기서 history 각각 기간 전체 조회
    const fourDaysAgoEndDate = endDate.subtract(3, 'day').startOf('day');
    const diffInDays = endDate.diff(startDate, 'day');

    const { data: injectionHistoryPrintData } =
      usePumpHistoryPrint.useInjectionHistoryPrint({
        startDate: diffInDays >= 3 ? fourDaysAgoEndDate : startDate,
        endDate,
        enabled: open,
      });

    const oneMonthAgoEndDate = endDate.subtract(1, 'month').startOf('day');
    const diffInMonths = endDate.diff(startDate, 'month');

    const { data: replacementCyclePrintData } =
      usePumpHistoryPrint.useReplacementCyclePrint({
        startDate: diffInMonths >= 1 ? oneMonthAgoEndDate : startDate,
        endDate,
        enabled: open,
      });

    const { data: airRemovalHistoryPrintData } =
      usePumpHistoryPrint.useAirRemovalHistoryPrint({
        startDate: diffInMonths >= 1 ? oneMonthAgoEndDate : startDate,
        endDate,
        enabled: open,
      });

    const { data: alarmHistoryPrintData } =
      usePumpHistoryPrint.useAlarmHistoryPrint({
        startDate,
        endDate,
        enabled: open,
      });

    const handleEvaluationChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setEvaluationValue(e.target.value);
    };

    return (
      <div>
        <PrintButton onClick={handleOpen} />
        <Styled.ModalContainer
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Styled.ModalBox>
            <Styled.PumpPrintContainer ref={ref}>
              <Styled.CustomTypographyWrapper>
                <Styled.CustomTypography
                  id="modal-modal-title"
                  variant="h5"
                  align="center"
                  p={2}
                >
                  {Constants.PRINT.TITLE}
                </Styled.CustomTypography>
                <Styled.PrintButton
                  onClick={handlePrint}
                  variant="contained"
                  className="print-button"
                >
                  {Constants.PRINT.PRINT}
                </Styled.PrintButton>
              </Styled.CustomTypographyWrapper>
              {children}
              <Evaluation
                label={`${Constants.PRINT.CONFIRMER_COMMENTS}`}
                value={evaluationValue}
                handleEvaluationChange={handleEvaluationChange}
              />
              <Styled.PumpListContainer>
                <Styled.PumpWrapper>
                  <Styled.PumpHistoryTitle>
                    {Constants.TabNames.INJECTION}
                  </Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead headNames={Constants.historyHeaderNames} />
                    <PumpTableBody data={injectionHistoryPrintData} />
                  </TableContainer>
                </Styled.PumpWrapper>
                <Styled.PumpWrapper>
                  <Styled.PumpHistoryTitle>
                    {Constants.TabNames.REPLACEMENT}
                  </Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead headNames={Constants.historyHeaderNames} />
                    <PumpTableBody
                      isPrint={true}
                      isPrintText={`${Constants.PRINT.REPLACEMENT_WARNING}`}
                      data={replacementCyclePrintData?.filter(
                        (pumpData: PumpDataProps, index: number) =>
                          index !== 0 &&
                          handleChecked({
                            prevData: replacementCyclePrintData[index - 1],
                            data: pumpData,
                          })
                      )}
                    />
                  </TableContainer>
                </Styled.PumpWrapper>
                <Styled.PumpWrapper>
                  <Styled.PumpHistoryTitle>
                    {Constants.TabNames.AIRREMOVE}
                  </Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead headNames={Constants.historyHeaderNames} />
                    <PumpTableBody
                      isPrint={true}
                      isPrintText={`${Constants.PRINT.AIRREMOVE_WARNING}`}
                      data={airRemovalHistoryPrintData?.filter(
                        (pumpData: PumpDataProps, index: number) =>
                          index !== 0 &&
                          handleChecked({
                            data: pumpData,
                          })
                      )}
                    />
                  </TableContainer>
                </Styled.PumpWrapper>
                <Styled.PumpWrapper>
                  <Styled.PumpHistoryTitle>
                    {Constants.TabNames.ALARM}
                  </Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead
                      headNames={Constants.alarmHistoryHeaderNames}
                    />
                    <PumpTableBody data={alarmHistoryPrintData} />
                  </TableContainer>
                </Styled.PumpWrapper>
              </Styled.PumpListContainer>
            </Styled.PumpPrintContainer>
          </Styled.ModalBox>
        </Styled.ModalContainer>
      </div>
    );
  }
);

export default PumpPrintModal;
