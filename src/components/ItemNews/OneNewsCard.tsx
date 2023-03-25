import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { INews } from './../../store/Services/Slices/newsListSlice';
import { IComment } from './../../store/Services/Slices/coreCommentsSlice';
import CommentsCard from './CommentsCard';

const OneNewsCard = ({ oneNews, coreComments }: { oneNews: INews, coreComments: IComment[] }): JSX.Element => {

  return (<>
    <Grid style={oneNews?.kids?.length === undefined ? { marginLeft: '20px', paddingBottom: '0' } : { marginLeft: '20px', paddingBottom: '0' }} key={oneNews.id} >
      <Card variant="outlined" sx={{ width: '95%', marginTop: '90px', backgroundColor: '#ffffff', boxShadow: '1px 1px 12px 2px rgba(34, 60, 80, 0.2)' }}>
        <CardContent>
          <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
            Published by : <strong>{oneNews.by}</strong> , at  {oneNews.time}
          </Typography>
          <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
            {oneNews.title}
          </Typography>
          <Typography component='div' variant="body2" sx={{ display: 'flex', paddingTop: '10px' }}>
            <Typography >
              <InsertLinkIcon />
            </Typography>
            <Typography component='div' sx={{ paddingLeft: '10px', paddingTop: '1px' }}>
              Link : <a href={oneNews.url}>{oneNews.url}</a>
            </Typography>
          </Typography>
          <Typography component='div' variant="body2" sx={{ display: 'flex', paddingTop: '10px' }}>
            <Typography>
              <ThreePIcon />
            </Typography >
            <Typography component='div' sx={{ paddingLeft: '10px', paddingTop: '1px' }}>
              Comments : <strong>{oneNews?.kids?.length === undefined ? 0 : oneNews?.kids?.length}</strong>
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
