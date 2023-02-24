import React, {useState, memo, useEffect} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";
import {useSelector} from "react-redux";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const UsersListItem = memo(({ user, handleSubscribe, currentSubscribes }) => {
    const [isLoader, setIsLoader] = useState(false);
    const userId = useSelector(state => state.auth.userId);

    return (
        <React.Fragment >
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={`${user.firstName} ${user.lastName || ""}`}
                    secondary={
                        <React.Fragment>
                            {user.login}
                        </React.Fragment>
                    }
                />
                {isLoader ?
                    <CircularProgress size={20} color="success" />  :
                    !currentSubscribes.some(e => e.userId === user.id) ?
                        <PersonAddIcon
                    onClick={() => handleSubscribe({userId: user.id, owner: userId}, setIsLoader)}
                /> : <HowToRegIcon color="success" />}
            </ListItem>
            <Divider variant="inset"/>
        </React.Fragment>
    );
});

export default UsersListItem;