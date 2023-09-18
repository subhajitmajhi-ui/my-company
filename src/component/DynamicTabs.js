import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';


const tabData = [
  {
    label: 'DETAILS',
    content: 'The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky it has a straight fit with well-defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.',
  },
  {
    label: 'DELIVERY',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    label: 'FIT',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ',
  },
  {
    label: 'SHARE',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
];

const DynamicTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const CustomTabPanel = styled(TabPanel)(
    {padding: 0}
  );

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        sx={{
          '& .MuiTab-root': {
            justifyContent: 'flex-start', 
          },
          '& .Mui-selected': {
            color: 'black', 
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabData.map((tab, index) => (
        <CustomTabPanel key={index} value={selectedTab} index={index} >
          {tab.content}
        </CustomTabPanel>
      ))}
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ padding: '20px 0' }}>{children}</Box>}
    </div>
  );
}

export default DynamicTabs;
