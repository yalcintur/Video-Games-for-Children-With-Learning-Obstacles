import React from 'react';
import {useContext} from 'react';
import { UserContext } from '../contexts/user.context.jsx';
import {Box, Typography,Tab} from '@mui/material/';
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import Profile from './profile';
import Games from './games';

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const [value, setValue] = React.useState('1');

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

  return(
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab sx={{textTransform:"none"}} label="Profil" value="1" />
            <Tab sx={{textTransform:"none"}} label="Oyunlar" value="2" />
            <Tab sx={{textTransform:"none"}} label="Gelişim" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Profile/></TabPanel>
        <TabPanel value="2"><Games/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  )
}


export default Dashboard;
