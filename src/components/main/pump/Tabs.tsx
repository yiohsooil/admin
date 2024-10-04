import * as React from 'react';
import { Styled } from '../../../styles/tabs';
import { PumpType } from '../../../types';

function CustomTabPanel(props: PumpType.TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pump-tabpanel-${index}`}
      aria-labelledby={`pump-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Styled.CustomBox sx={{ p: 3 }}>{children}</Styled.CustomBox>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `pump-tab-${index}`,
    'aria-controls': `pump-tabpanel-${index}`,
  };
}

const Tabs = ({ tabOne, tabTwo, tabThree, tabFour }: PumpType.TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.CustomBox sx={{ width: '100%' }}>
      <Styled.CustomBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Styled.CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="pump tabs"
        >
          <Styled.CustomTab label="주입이력" {...a11yProps(0)} />
          <Styled.CustomTab label="교체이력" {...a11yProps(1)} />
          <Styled.CustomTab label="공기빼기" {...a11yProps(2)} />
          <Styled.CustomTab label="알람이력" {...a11yProps(3)} />
        </Styled.CustomTabs>
      </Styled.CustomBox>
      <CustomTabPanel value={value} index={0}>
        {tabOne}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {tabTwo}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {tabThree}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {tabFour}
      </CustomTabPanel>
    </Styled.CustomBox>
  );
};

export default Tabs;
