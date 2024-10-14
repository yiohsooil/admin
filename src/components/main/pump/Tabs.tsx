import React, { useState } from 'react';
import { Styled } from '../../../styles/tabs';
import { PumpType } from '../../../types';
import { Constants } from '../../../constants/table';

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
  const [value, setValue] = useState(0);

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
          <Styled.CustomTab
            label={`${Constants.TabNames.INJECTION}`}
            {...a11yProps(0)}
          />
          <Styled.CustomTab
            label={`${Constants.TabNames.REPLACEMENT}`}
            {...a11yProps(1)}
          />
          <Styled.CustomTab
            label={`${Constants.TabNames.AIRREMOVE}`}
            {...a11yProps(2)}
          />
          <Styled.CustomTab
            label={`${Constants.TabNames.ALARM}`}
            {...a11yProps(3)}
          />
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
