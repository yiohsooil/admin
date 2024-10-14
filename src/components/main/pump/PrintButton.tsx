import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import Fab from '@mui/material/Fab';
import { Styled } from '../../../styles/main/pump';

interface PrintButtonProps {
  onClick: () => void;
}

const PrintButton = ({ onClick }: PrintButtonProps) => {
  return (
    <Styled.PrintWrapper sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="print" onClick={onClick}>
        <PrintIcon />
      </Fab>
    </Styled.PrintWrapper>
  );
};

export default PrintButton;
