import React from 'react';
import { Link } from "react-router-dom";
import { 
    Card, 
    CardActions, 
    CardContent,
    Button, 
    Typography,
    Grid
  } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { INews } from './../../store/Services/Slices/newsListSlice';


const NewsCard = ({newsList}: {newsList: INews[]}): JSX.Element => {

 return ( <>
 {newsList?.map((item: INews) => (
 <Grid style={{marginLeft: '270px'}} key={item.id} >
  <Card variant="outlined" sx={{ maxWidth: 875, margin: '10px', backgroundColor: '#e5dfe5'}}>
   <CardContent>
     <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
      Published by : <strong>{item.by}</strong> , at  {item.time}
     </Typography>
     <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
       {item.title}
     </Typography>
     <Typography component='div' variant="body2" sx={{display: 'flex', paddingTop: '10px' }}>
        <Typography >
          <StarsIcon/>
          </Typography>
          <Typography component='div' sx={{paddingLeft: '10px', paddingTop: '1px'}}>
          Raiting is: <strong>{item.score}</strong>
          </Typography>
     </Typography>
   </CardContent>
   <CardActions>
     <Button component={Link} to={`/${item.id}`} size="small" style={{ textDecoration: 'none', color: '#1b324e'}}>{'Learn More >>>'}</Button>
   </CardActions>
   </Card>
   </Grid>

 ))}
  
 </>
 );
};

export default NewsCard;