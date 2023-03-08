import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import MainPage from './containers/MainPage/MainPage';


function App(): JSX.Element {
    
    return (
        <>
            <CssBaseline />
            <Container
                maxWidth={false}
                disableGutters
                sx={{ margin: '0', padding: '0' }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainPage />}/>
                    </Routes>
                </BrowserRouter>
            </Container>
        </>
    );
}

export default App;

