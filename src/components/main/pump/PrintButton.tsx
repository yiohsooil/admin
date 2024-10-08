import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Styled } from '../../../styles/main/pump';

interface PrintButtonProps {
  handlePrint?: () => void;
  onClick: () => void;
}

const PrintButton = ({ handlePrint, onClick }: PrintButtonProps) => {
  return (
    <Styled.PrintWrapper sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="print" onClick={onClick}>
        <PrintIcon />
      </Fab>
    </Styled.PrintWrapper>
  );
};

export default PrintButton;
