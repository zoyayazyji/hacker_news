import React from 'react';
import { Grid, Button } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = (): JSX.Element  => { 
    return (
        <Grid style={{ backgroundColor: '#717487' }}>
            {/* <Grid style={{ backgroundColor: '#3d3d3b' }}></Grid> */}
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
                    <Typography component={Link} to={`/`} style={{color: '#700d70', textDecoration: 'none', marginLeft: '15px'}}
                    >
                       Hacker News
                    </Typography>
                    <Typography style={{marginLeft: '1150px'}}>
                        <Button style={{color: '#700d70'}} onClick={()=> window.location.reload()}>
                        <AutorenewIcon/>
                        </Button>
                    </Typography>
                </Grid>
            </Toolbar>
        </Grid>
    );
};

export default Header;
