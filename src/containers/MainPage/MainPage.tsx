import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../store/Hooks';
import { getNewsList } from '../../store/Services/Actions/newsListAction';

const MainPage = (): JSX.Element => {
    const appDispatch = useAppDispatch();
    const { newsList } = useAppSelector((state) => state.newsList);
 
    useEffect(() => {
      void appDispatch(getNewsList());
  }, []);

    console.log(newsList);
    return (
        <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            spacing={{ xs: 2, sm: 4, md: 6, lg: 12 }}
            columns={{ xs: 2, sm: 4, md: 6, lg: 12 }}
            marginTop={{
                xs: '-100px',
                sm: '-100px',
                md: '-120px',
                lg: '-150px',
            }}
            paddingLeft={4}
            paddingRight={4}
        >
            <Grid item xs={12} sm={2} md={3} lg={6}>
             <Typography component="span">Hello</Typography>
            </Grid>
            
        </Grid>
    );
};

export default MainPage;