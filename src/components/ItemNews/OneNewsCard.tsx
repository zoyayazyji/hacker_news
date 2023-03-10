import React from 'react';
import { 
    Card, 
    CardActions, 
    CardContent,
    Typography,
    Grid
  } from '@mui/material';
  import InsertLinkIcon from '@mui/icons-material/InsertLink';
  import ThreePIcon from '@mui/icons-material/ThreeP';
import { INews } from './../../store/Services/Slices/newsListSlice';
import { IComment } from './../../store/Services/Slices/coreCommentsSlice';
import CommentsCard from './CommentsCard';
import Loader from '../Loader/Loader';


const OneNewsCard = ({ oneNews, coreComments }: {oneNews: INews, coreComments: IComment[]}): JSX.Element => {
  
 return ( <>
 {/* <Loader loading={oneNews?.kids?.length !== undefined ? true : false} /> */}
<Grid style={oneNews?.kids?.length === undefined ?{marginLeft: '270px', paddingBottom: '420px'} : {marginLeft: '270px', paddingBottom: '20px'}} key={oneNews.id} >
  <Card variant="outlined" sx={{ maxWidth: 875, margin: '10px', backgroundColor: '#e5dfe5'}}>
   <CardContent>
     <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
      Published by : <strong>{oneNews.by}</strong> , at  {oneNews.time}
     </Typography>
     <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
       {oneNews.title}
     </Typography>
     <Typography component='div' variant="body2" sx={{display: 'flex', paddingTop: '10px' }}>
        <Typography >
          <InsertLinkIcon/>
          </Typography>
          <Typography component='div' sx={{paddingLeft: '10px', paddingTop: '1px'}}>
          Link : <a href={oneNews.url}>{oneNews.url}</a> 
          </Typography>
     </Typography>
     <Typography component='div' variant="body2" sx={{display: 'flex', paddingTop: '10px' }}>
      <Typography>
        <ThreePIcon/>
      </Typography >
      <Typography component='div' sx={{paddingLeft: '10px', paddingTop: '1px'}}>
      Comments : <strong>{oneNews?.kids?.length}</strong>
      </Typography>
          </Typography>
   </CardContent>
   </Card>
   </Grid> 
   <CommentsCard
    coreComments={coreComments}
   />
 </>
 );
};

export default OneNewsCard;