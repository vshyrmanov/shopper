import React, {useState} from 'react';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {headerMenuHelper} from "./helper";

const HeaderMenu = ({ anchorEl, setAnchorEl }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const isGuest = useSelector(state => state.guestSession.isGuest);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const helper = headerMenuHelper({
        dispatch, setAnchorEl, setOpenDialog, navigate
    })

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={helper.handleClose}
                onClick={helper.handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={helper.usersLink}>
                    Users
                </MenuItem>
                {isGuest ?
                    <MenuItem onClick={helper.guestLogOut}>Sign in</MenuItem> :
                    <MenuItem onClick={helper.handleClickOpen}>
                    Logout
                </MenuItem>}
            </Menu>
            <Dialog
                open={openDialog}
                onClose={helper.handleCloseDialog}
            >
                <DialogTitle>
                    Are you really want to quit from your profile ?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Anyway, we will waiting for you.
                        Please, come back soon and bring your friends.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={helper.handleCloseDialog}>Cancel</Button>
                    <Button onClick={helper.logOut}>
                        Sign out
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default HeaderMenu;