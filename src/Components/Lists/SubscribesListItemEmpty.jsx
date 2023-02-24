import React, {useState} from 'react';
import {ListItem} from "@mui/material";
import {anim} from "../../styles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListIcon from "@mui/icons-material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import {ApiHelper} from "../../service/api";
import {subscribesItemHelper} from "./helper";

const SubscribesListItemEmpty = ({ item, ind, renderList }) => {
    const [isLoader, setIsLoader] = useState(false);
    const apiHelper = new ApiHelper();
    const helper = subscribesItemHelper({
        apiHelper, id: item.id, setIsLoader, renderList
    })

    return (
        <ListItem
            className={isLoader ? anim.zoomOutRight : anim.fadeInLeft}
            style={isLoader ? {} : {animationDelay: `0.${ind}s`}}>
            <ListItemAvatar>
                <ListIcon />
            </ListItemAvatar>
            <ListItemText
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.error"
                        >
                            {item.owner}
                        </Typography>
                        {` has been removed current list`}
                    </React.Fragment>
                }
            />
            <DeleteIcon
                className={isLoader ? anim.zoomOut : anim.fadeInRight}
                style={isLoader ? {} : {animationDelay: `1.${ind}s`}}
                color="error"
                onClick={helper.removeOverallList}
            />
        </ListItem>
    )
};

export default SubscribesListItemEmpty;