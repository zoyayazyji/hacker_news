import React from 'react';
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Box
} from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { INews } from './../../store/Services/Slices/newsListSlice';

const NewsCard = ({ newsList }: { newsList: INews[] }): JSX.Element => {
  return (<>
  <Grid sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginLeft: '120px', marginTop: '75px'}}>
    {newsList?.map((item: INews) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}} key={item.id} >
        <Card variant="outlined" sx={{ width: '300px', height: 375, marginTop: '20px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px', boxShadow: '1px 1px 12px 2px rgba(34, 60, 80, 0.2)', backgroundColor: '#ffffff', ":hover": {height: 405, weight: 405, marginTop: '5px', marginBottom: '5px'}}}>
          <CardContent>
            <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
              Published by : <strong>{item.by}</strong> , at  {item.time}
            </Typography>
            <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px', height: '200px' }}>
              {item.title}
            </Typography>
            <hr style={{backgroundColor: '#da3ada', height: '2px'}}/>
            <Typography component='div' variant="body2" sx={{ display: 'flex', paddingTop: '10px' }}>
              <Typography >
                <StarsIcon />
              </Typography>
              <Typography component='div' sx={{ paddingLeft: '10px', paddingTop: '1px' }}>
                Raiting is: <strong>{item.score}</strong>
              </Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/${item.id}`} size="small" sx={{ textDecoration: 'none', color: '#da3ada', ':hover': {color: '#c31cf6'} }}>{'Learn More >>>'}</Button>
          </CardActions>
        </Card>
      </Box>
    ))}
    </Grid>
  </>
  );
};

export default NewsCard;
