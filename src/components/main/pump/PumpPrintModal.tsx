import React, { forwardRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import PrintButton from './PrintButton';
import dayjs from 'dayjs';
import { Styled } from '../../../styles/main/pump';
import { usePumpHistoryPrint } from '../../../service/hooks/usePumpHistoryPrint';
import TableContainer from '../TableContainer';
import {
  alarmHistoryHeaderNames,
  historyHeaderNames,
} from '../../../constants/tableHeaders';
import PumpTableHead from './PumpTableHead';
import PumpTableBody from './PumpTableBody';
import { PumpDataProps } from './tab/AirRemovalHistory';
import { handleChecked } from '../../../utils/isChecked';

interface PumpPrintModalProps {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  handlePrint: () => void;
  children: React.ReactNode;
}

const PumpPrintModal = forwardRef<HTMLDivElement, PumpPrintModalProps>(
  ({ startDate, endDate, handlePrint, children }, ref) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h1"
              align="center"
              p={1}
            >
              펌프 사용 내역
            </Typography>
            <button onClick={handlePrint}>프린트</button>
            {children}
            <Styled.PumpPrintContainer>
              <Styled.PumpListContainer ref={ref}>
                <Styled.PumpWrapper>
                  <Styled.PumpHistoryTitle>주입이력</Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead headNames={historyHeaderNames} />
                    <PumpTableBody data={injectionHistoryPrintData} />
                  </TableContainer>
                </Styled.PumpWrapper>
                <Styled.PumpWrapper>
                  <Styled.PumpHistoryTitle>교체이력</Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead headNames={historyHeaderNames} />
                    <PumpTableBody
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
                  <Styled.PumpHistoryTitle>공기빼기</Styled.PumpHistoryTitle>
                  <TableContainer>
                    <PumpTableHead headNames={historyHeaderNames} />
                    <PumpTableBody
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
                <Styled.PumpHistoryTitle>알람이력</Styled.PumpHistoryTitle>
                <Styled.PumpWrapper>
                  <TableContainer>
                    <PumpTableHead headNames={alarmHistoryHeaderNames} />
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
