
import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from '@mui/material';
import Gallery from './Gallery';




export default function CardPage() {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Card sx={{ minWidth: 680, minHeight:216, borderRadius:'8px' }}>
    
   <Tabs centered value={value} onChange={handleChange} aria-label="disabled tabs example">
   
   <Tab  sx={{'marginLeft':10}} label="Stories" />
   <Tab sx={{'marginLeft':10}} label="Reels"/>
   <Tab sx={{'marginLeft':10}}  label="Rooms" />
    </Tabs>
   
    <Divider />
      <CardContent>
        <Gallery/>
      </CardContent>
     
    </Card>
  );
}
