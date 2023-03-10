import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import ItemNews from './containers/ItemNews/ItemNews';

function App(): JSX.Element {
    return (
        <>
            <CssBaseline >
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{ margin: '0', padding: '0' }}
                >
                    <HashRouter>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                                <Route path='/' element={<MainPage />} />
                                <Route path={"/:id"} element={<ItemNews />} />
                            </Route>
                        </Routes>
                    </HashRouter>
                </Container>
            </CssBaseline>
        </>
    );
};

export default App;

