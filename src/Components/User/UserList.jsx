import React, {useState, memo} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListIcon from "@mui/icons-material/List";
import ListItemText from "@mui/material/ListItemText";
import {CircularProgress} from "@mui/material";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Divider from "@mui/material/Divider";
import {ApiHelper} from "../../service/api";
import {useSelector} from "react-redux";
import {userListHelper} from "./helper";

const UserList = memo(({ list, listOverall, setRenderList, userInfo }) => {
    const [isLoader, setIsLoader] = useState(false);
    const apiHelper = new ApiHelper();
    const userId = useSelector(state => state.auth.userId);

    const form = {
        listOwner: userInfo.firstName,
        owner: userId,
    }

    const helper = userListHelper({
        setIsLoader, apiHelper, listOverall, setRenderList, form, id: list._id
    })

    return (
        <React.Fragment key={list._id}>
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <ListIcon />
                </ListItemAvatar>
                <ListItemText
                    primary={list.name}
                />
                {isLoader ? <CircularProgress size={20} /> : listOverall.some(e => e.listID === list._id) ?
                    <LinkOffIcon
                        color="error"
                        onClick={helper.removeOverList}/>  :
                    <AddLinkIcon
                        color="success"
                        onClick={helper.handleAddOverallList}/>
                }
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    );
});

export default UserList;