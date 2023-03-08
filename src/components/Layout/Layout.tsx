import React, { useState } from 'react';
import Header from './Header/Header';

import { Outlet, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

const Layout = (): JSX.Element => {

    return (
        <Grid >
             <Header/>
                <Outlet />
        </Grid>
    );
};

export default Layout;
