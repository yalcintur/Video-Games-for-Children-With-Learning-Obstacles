import React from 'react';
import {Grid, Paper, Box, Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';

export default function Games(){

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

return(
  <Box sx={{ flexGrow: 1 }}>
   <Grid sx={{display: 'flex', aligItems: 'center',justifyContent: 'center'}}container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       <Grid sx={{textDecoration:"none", display: 'flex', aligItems: 'center',justifyContent: 'center'}} component={Link} to="/gameone" item xs={4} sm={6} md={4}>
        <Item>
         <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={require('../assets/game-one.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gece Gündüz
                  </Typography>
              <Typography variant="body2" color="text.secondary">
              Zaman algısını güçlendiren Gece Gündüz oyunu, aktivite ve zaman ilişkisini çocuklarda geliştirir.
              </Typography>
              </CardContent>
              </CardActionArea>
          </Card>
         </Item>
       </Grid>
       <Grid sx={{textDecoration:"none", display: 'flex', aligItems: 'center',justifyContent: 'center'}} component={Link} to="/about" item xs={4} sm={6} md={4}>
         <Item> <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
           <CardMedia
             component="img"
             height="300"
             image={require('../assets/game-one.png')}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Gece Gündüz
                   </Typography>
               <Typography variant="body2" color="text.secondary">
               Zaman algısını güçlendiren Gece Gündüz oyunu, aktivite ve zaman ilişkisini çocuklarda geliştirir.
               </Typography>
               </CardContent>
               </CardActionArea>
           </Card></Item>
       </Grid>
       <Grid sx={{textDecoration:"none", display: 'flex', aligItems: 'center',justifyContent: 'center'}} component={Link} to="/about" item xs={4} sm={6} md={4}>
         <Item> <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
           <CardMedia
             component="img"
             height="300"
             image={require('../assets/game-one.png')}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Gece Gündüz
                   </Typography>
               <Typography variant="body2" color="text.secondary">
               Zaman algısını güçlendiren Gece Gündüz oyunu, aktivite ve zaman ilişkisini çocuklarda geliştirir.
               </Typography>
               </CardContent>
               </CardActionArea>
           </Card></Item>
       </Grid>
   </Grid>
 </Box>
)
}
