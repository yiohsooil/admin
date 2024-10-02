import * as React from 'react';
import { Drawer } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import Styled from '../../../styles/main/pump';
import PumpPrint from './PumpPrint';
import Tabs from './Tabs';
import { TabObj } from './tab';
import { pump } from '../../../types';

const Pump = ({
  index,
  selectedIndex,
  state,
  toggleDrawer,
  row,
}: pump.PumpProps) => {
  const handleToggleDrawer = toggleDrawer(index, false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Drawer
      anchor={'right'}
      open={index === selectedIndex && state}
      onClose={handleToggleDrawer}
    >
      <Styled.Container>
        <Tabs
          tabOne={<TabObj.one index={index} />}
          tabTwo={<TabObj.two index={index} />}
          tabThree={<TabObj.three index={index} />}
          tabFour={<TabObj.four index={index} />}
        />
        <Styled.PrintButton onClick={handlePrint}>
          프린트 하기
        </Styled.PrintButton>
        {/* <PumpPrint ref={componentRef} row={row} /> */}
      </Styled.Container>
    </Drawer>
  );
};

export default Pump;
