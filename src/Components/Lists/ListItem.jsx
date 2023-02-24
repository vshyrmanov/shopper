import React, {useState} from 'react';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListIcon from "@mui/icons-material/List";
import ListItemText from "@mui/material/ListItemText";
import { anim } from "../../styles";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ApiHelper} from "../../service/api";
import { listItemHelper } from './helper';
import {ListItem} from "@mui/material";
import { DoneProgress } from "./Styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ItemMenu from "../List/ItemMenu";

const ListElement = ({item, ind, listItem}) => {
    const [isRemoveLoader, setIsRemoveLoader] = useState({id:"", action: false});
    const [anchorEl, setAnchorEl] = useState(null);

    const isGuest = useSelector(state => state.guestSession.isGuest);
    const guestItemList = useSelector(state => state.guestSession.listItem);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const apiHelper = new ApiHelper('list');

    const helper = listItemHelper({
        guestItemList, listItem, isGuest, apiHelper, dispatch, setIsRemoveLoader, navigate, setAnchorEl, item
    });

    const isLoader = isRemoveLoader.action && isRemoveLoader.id === item._id

    return (
        <ListItem
            className={isLoader ? anim.zoomOutRight : anim.fadeInLeft}
            style={isLoader ? {} : {animationDelay: `0.${ind}s`}}>
            <ListItemAvatar>
                <ListIcon />
            </ListItemAvatar>
            <ListItemText
                onClick={helper.getLink(item._id, item.name)}
                primary={item.name}
            />
                <DoneProgress>
                    {`${helper.getDoneCounting(item._id).done}/${helper.getDoneCounting(item._id).all}`}
                </DoneProgress>
            <MoreHorizIcon onClick={helper.handleMenuList}/>
            <ItemMenu
                anchorEl={anchorEl}
                handleClose={helper.handleClose}
                editElement={helper.editList}
                removeElement={helper.removeList}
            />
        </ListItem>
    );
};

export default ListElement;