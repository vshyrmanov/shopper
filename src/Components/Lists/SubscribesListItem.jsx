import React, {useState} from 'react';
import {ListItem} from "@mui/material";
import {anim} from "../../styles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {subscribesItemHelper} from "./helper";
import {ApiHelper} from "../../service/api";
import {useNavigate} from "react-router-dom";
import ItemMenu from "../List/ItemMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {useDispatch} from "react-redux";

const SubscribesListItem = ({ item, ind, renderList }) => {
    const [isLoader, setIsLoader] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const apiHelper = new ApiHelper();
    const navigate = useNavigate();
    const helper = subscribesItemHelper({
        apiHelper, id: item.id, setIsLoader, navigate, setAnchorEl, renderList, dispatch
    })

    return (
        <>
            <ListItem
                className={isLoader ? anim.zoomOutRight : anim.fadeInLeft}
                style={isLoader ? {} : {animationDelay: `0.${ind}s`}}
            >
                <ListItemAvatar>
                    <SupervisedUserCircleIcon />
                </ListItemAvatar>
                <ListItemText
                    onClick={helper.linkToItem(item.lists._id)}
                    primary={item.lists.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                List owner
                            </Typography>
                            {` — ${item.owner}`}
                        </React.Fragment>
                    }
                />
                {/*<DoneProgress>*/}
                {/*    {`${helper.getDoneCounting(item.id).done}/${helper.getDoneCounting(item.id).all}`}*/}
                {/*</DoneProgress>*/}
                {/*<DeleteIcon*/}
                {/*    className={isLoader ? anim.zoomOut : anim.fadeInRight}*/}
                {/*    style={isLoader ? {} : {animationDelay: `1.${ind}s`}}*/}
                {/*    color="error"*/}
                {/*    onClick={helper.removeOverallList}*/}
                {/*/>*/}
                <MoreHorizIcon onClick={helper.handleMenuList}/>
                <ItemMenu
                    anchorEl={anchorEl}
                    handleClose={helper.handleClose}
                    removeElement={helper.removeOverallList}
                    onlyRemove={true}
                />
            </ListItem>
            <Divider variant="inset" component="li" className={anim.fadeInRight} />
        </>
    );
};

export default SubscribesListItem;