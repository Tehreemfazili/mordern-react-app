import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './BasicTabs.scss'
import Instances from '../Instances/Instances.tsx';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-wrapper'>
        <Tab label="Overview" {...a11yProps(0)} className='primary-btn-outlined' />
        <Tab label="Variant" {...a11yProps(1)} className='primary-btn-outlined'/>
        <Tab label="Instances" {...a11yProps(2)} className='primary-btn-outlined'/>
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        Overview
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Variant
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Instances/>
      </CustomTabPanel>
    </Box> 
  );
}