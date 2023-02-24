import React from 'react';
import {Main} from "./Styled";
import CircularProgress from '@mui/material/CircularProgress';


const MainLoader = () => {
    return (
        <Main>
            <CircularProgress />
        </Main>
    );
};

export default MainLoader;