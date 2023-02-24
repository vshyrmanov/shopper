import React, { useEffect, useState } from 'react';
import { StyledDrawer, Puller } from "./Styled";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { SwapperHelper } from "./helper";

const SwapDrawer = ({ children}) => {
    const isSwapper = useSelector(state => state.swapper.isSwapper);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const helper = SwapperHelper({dispatch, setOpen})

    useEffect(() => {
        helper.toggleSwapper(isSwapper)
    }, [isSwapper])

    return (
        <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={helper.toggleDrawer(false)}
            onOpen={helper.toggleDrawer(true)}
        >
            <StyledDrawer>
                <Puller />
                {children}
            </StyledDrawer>
        </SwipeableDrawer>
    );
};

export default SwapDrawer;