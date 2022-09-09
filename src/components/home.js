import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import bannervd from '../assets/bannervideo.mp4';
import {useContext} from 'react';
import { UserContext } from '../contexts/user.context.jsx';
import Dashboard from './dashboard.js';

const Home = () =>{
  const { currentUser } = useContext(UserContext);

if(currentUser){
  return(
    <Dashboard/>
  )
}

else{
  return(
    <React.Fragment>
  <Container fixed>
 <Typography>Ana sayfa</Typography>
  </Container>

  </React.Fragment>
  )
}
}

export default Home;
