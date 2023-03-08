import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface INavigation {
    to: string;
    end: boolean;
    children: ReactJSXElement;
}

const Navigation: FC<INavigation> = ({ to, end, children }) => {
    return (
        <Box>
            <NavLink
                style={{ textDecoration: 'none', color: '#2855af' }}
                to={to}
                end={end}
            >
                {children}
            </NavLink>
        </Box>
    );
};

export default Navigation;
