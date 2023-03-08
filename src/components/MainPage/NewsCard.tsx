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
 {newsList.map((item: INews) => (
 <>
 <Grid style={{marginLeft: '270px'}}>
  <Card variant="outlined" sx={{ maxWidth: 875, margin: '10px', backgroundColor: '#be7d6a'}}>
   <CardContent key={item.id}>
     <Typography sx={{ fontSize: 14 }} color="text.secondary">
      Published by : <strong>{item.by}</strong> , at  {new Date(item.time * 100).toLocaleString()}
     </Typography>
     <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
       {item.title}
     </Typography>
     <Typography variant="body2" sx={{display: 'flex', paddingTop: '10px' }}>
        <Typography >
          <StarsIcon/>
          </Typography>
          <Typography sx={{paddingLeft: '10px', paddingTop: '1px'}}>
          Raiting is: <strong>{item.score}</strong>
          </Typography>
     </Typography>
   </CardContent>
   <CardActions>
     <Button component={Link} to={`/${item.id}`} size="small" style={{ textDecoration: 'none', color: '#fdd3cf'}}>{'Learn More >>>'}</Button>
   </CardActions>
   </Card>
   </Grid>
  </>
 ))}
  
 </>
 );
};

export default NewsCard;