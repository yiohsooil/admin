import React, { useState } from 'react';
import { Styled } from '../../styles/main/table';
import { FormGroup, Stack, Typography } from '@mui/material';
import Pump from './pump/Pump';
import { MainType } from '../../types';

const TableBody = ({ rows }: MainType.TableBodyProps) => {
  const [state, setState] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleDrawer =
    (index: number, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        setSelectedIndex(null);
        setState(false);
        return;
      }

      setSelectedIndex(index);
      setState(open);
    };

  return (
    <Styled.CustomTableBody>
      {rows ? (
        rows?.map((row, index) => (
          <Styled.CustomTableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            active={1}
          >
            <Styled.CustomTableCell
              component="th"
              scope="row"
              align="center"
              onClick={toggleDrawer(index, true)}
              active={1}
            >
              {row.name}
            </Styled.CustomTableCell>
            <Pump
              index={index}
              selectedIndex={selectedIndex}
              state={state}
              toggleDrawer={toggleDrawer}
              row={row}
            />
            <Styled.CustomTableCell align="center">
              {row.birthDate}
            </Styled.CustomTableCell>
            <Styled.CustomTableCell align="center">
              {row.contact}
            </Styled.CustomTableCell>
            <Styled.CustomTableCell align="center">
              {row.pumpSerial}
            </Styled.CustomTableCell>
            <Styled.CustomTableCell align="center">
              {row.lastAccessTime}
            </Styled.CustomTableCell>
            <Styled.CustomTableCell
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <FormGroup>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: 'center' }}
                >
                  <Typography>가능</Typography>
                  <Styled.CustomSwitch
                    checked={row.loginLimit}
                    inputProps={{ 'aria-label': 'ant design' }}
                  />
                  <Typography>제한</Typography>
                </Stack>
              </FormGroup>
            </Styled.CustomTableCell>
          </Styled.CustomTableRow>
        ))
      ) : (
        <Styled.CustomTableRow>
          <Styled.CustomTableCell
            component="th"
            scope="row"
            align="center"
            colSpan={6}
          >
            데이터가 없습니다
          </Styled.CustomTableCell>
        </Styled.CustomTableRow>
      )}
    </Styled.CustomTableBody>
  );
};

export default TableBody;
