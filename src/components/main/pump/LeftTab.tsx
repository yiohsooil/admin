import React, { SyntheticEvent, useState } from 'react';
import { Styled } from '../../../styles/leftTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface LeftTapProps {
  historyTab: React.ReactElement;
  chartsTab: React.ReactElement;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`left-tabpanel-${index}`}
      aria-labelledby={`left-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Styled.CustomBox>
          <Styled.CustomTypography>{children}</Styled.CustomTypography>
        </Styled.CustomBox>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `left-tab-${index}`,
    'aria-controls': `left-tabpanel-${index}`,
  };
}

const LeftTap = ({ historyTab, chartsTab }: LeftTapProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.CustomBox
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
      }}
    >
      <Styled.CustomTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Styled.CustomTab label="펌프이력" {...a11yProps(0)} />
        <Styled.CustomTab label="차트" {...a11yProps(1)} />
      </Styled.CustomTabs>
      <TabPanel value={value} index={0}>
        {historyTab}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {chartsTab}
      </TabPanel>
    </Styled.CustomBox>
  );
};

export default LeftTap;
