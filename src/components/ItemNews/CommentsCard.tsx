import React from 'react';
import { 
    Card, 
    CardActions, 
    CardContent,
    Typography,
    Grid,
    Button
  } from '@mui/material';
  import InsertLinkIcon from '@mui/icons-material/InsertLink';
  import ThreePIcon from '@mui/icons-material/ThreeP';

import { IComment } from './../../store/Services/Slices/coreCommentsSlice';


const CommentsCard = ({coreComments}: {coreComments: IComment[]}): JSX.Element => {

 return ( <>
 {coreComments.map((item) => (
  <Grid style={{marginLeft: '270px', paddingBottom: '20px'}} key={item?.id} >
  <Card variant="outlined" sx={{ maxWidth: 875, margin: '10px', backgroundColor: '#be7d6a'}}>
   <CardContent>
     <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
      Published by : <strong>{item?.by}</strong> , at  {item?.time}
     </Typography>
     <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
       {item?.text}
     </Typography>
   </CardContent>
   <CardActions>
   <ThreePIcon/>
     <Button size="small" style={{ textDecoration: 'none', color: '#fdd3cf'}}>{'Look answers'}</Button>
    
   </CardActions>
   </Card>
   </Grid> 
 ))}
 
 </>
 );
};

export default CommentsCard;