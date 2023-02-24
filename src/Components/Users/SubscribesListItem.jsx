import React, {useState} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";
import {SubListItemHelper} from "./helper";
import {ApiHelper} from "../../service/api";
import {useDispatch} from "react-redux";
import { CircularProgress } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SubscribesListItem = ({ user }) => {
    const [isLoader, setIsLoader] = useState(false);
    const navigate = useNavigate();
    const apiHelper = new ApiHelper();
    const dispatch = useDispatch();
    const helper = SubListItemHelper({
        apiHelper, navigate, dispatch, setIsLoader
    })

    return (
        <React.Fragment>
            <ListItem alignItems="center" >
                <ListItemAvatar>
                    <AccountCircleIcon fontSize="large" color="disabled" />
                </ListItemAvatar>
                <ListItemText
                    onClick={() => helper.linkTo(user.id)}
                    primary={`${user.firstName} ${user.lastName || ""}`}
                    secondary={
                        <React.Fragment>
                            {user.login}
                        </React.Fragment>
                    }
                />
                {isLoader ?
                    <CircularProgress size={20} color="error" /> :
                    <PersonRemoveIcon color="error" onClick={() => helper.removeSubscribe(user.id)} />
                }
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    );
};

export default SubscribesListItem;