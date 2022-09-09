import React from 'react';
import {Paper, Box, Typography} from '@mui/material';
const About = () =>{
  return(
    <React.Fragment>
    <Box
       sx={{
         display: 'flex',
         flexWrap: 'wrap',
         '& > :not(style)': {
           m: 1,
           width: 128,
           height: 128,
         },
       }}
     >
       <Paper elevation={3}>
       <Typography>Selam</Typography>
       </Paper>
     </Box>
     </React.Fragment>
  );
}

export default About;
