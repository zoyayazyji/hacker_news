import React from 'react';
import { Grid, Button } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = (): JSX.Element => {
    return (
        <Grid sx={{ 
            backgroundColor: '#fefefe', 
            boxShadow: '0px 5px 5px -5px rgba(34, 60, 80, 0.6)',
            position: 'fixed',
            zIndex: 3,
            left: 0,
            top: 0,
            width: '100%',
           
            }}
            >
            <Toolbar
                sx={{
                    dispay: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: '0',
                }}
            >
                    <Typography component={Link} to={`/hacker_news`} style={{ color: '#da3ada', textDecoration: 'none' }}
                    >
                     💜 News Catalog 💜
                    </Typography>
                    <Typography >
                        <Button style={{ color: '#da3ada' }} onClick={() => window.location.reload()}>
                            <AutorenewIcon />
                        </Button>
                    </Typography>
            </Toolbar>
        </Grid>
    );
};

export default Header;
