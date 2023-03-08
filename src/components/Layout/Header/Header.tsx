import React, { FC } from 'react';

import AppBar from '@mui/material/AppBar';

import { Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Header = (): JSX.Element  => { 
    return (
        <Grid style={{ backgroundColor: '#3d3d3b' }}>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    paddingRight: '0',
                }}
            >
                <Grid
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography style={{color: '#be7d6a'}}
                    >
                       Hacker News
                    </Typography>

                </Grid>


            </Toolbar>

        </Grid>
    );
};

export default Header;
