import React, {useEffect, useState} from 'react';
import {
    CustomListItem,
    CustomListItemText,
    CustomTypography,
    ItemSettings,
    ListAvatar,
    ListItemWrapper, Quantity
} from "./Styled";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from "react-redux";
import {ApiHelper} from "../../service/api";
import {listItemHelper} from "./helper";
import { anim } from '../../styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ItemMenu from "./ItemMenu";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {CircularProgress} from "@mui/material";

const ListElement = ({item, ind}) => {
    const [isRemoveLoader, setIsRemoveLoader] = useState( {action: true, id: ""});
    const [isLoader, setIsLoader] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const apiHelper = new ApiHelper('item');
    const isGuest = useSelector(state => state.guestSession.isGuest);
    const guestList = useSelector(state => state.guestSession.listItem);

    const helper = listItemHelper({
        isGuest, guestList, dispatch, apiHelper, setIsRemoveLoader, item, setAnchorEl, setIsLoader
    })

    const isRemoveAnimation = isRemoveLoader.id === item._id && isRemoveLoader.action;

    useEffect(() => {
        setIsLoader(false)
    }, [item])

    return (
        <React.Fragment key={item._id}>
            <ListItemWrapper
                className={isRemoveAnimation ? anim.zoomOutRight : anim.fadeInLeft}
                style={isRemoveAnimation ? {} : {animationDelay: `0.${ind}s`}}
            >
                <CustomListItem>
                    <ListAvatar>
                        <ItemSettings>
                            {isLoader ? <CircularProgress size={20} /> :
                                <>
                            {!item.done && <CheckBoxOutlineBlankIcon
                                    color="disabled"
                                    fontSize="medium"
                                    onClick={helper.checkDone(item._id)} />}
                            {item.done && <CheckBoxIcon
                                    color="success"
                                    fontSize="medium"
                                    onClick={helper.cancelDone(item._id)}/>}
                                </>
                            }
                        </ItemSettings>
                    </ListAvatar>
                    <CustomListItemText
                        fc={item.done.toString()}
                        primary={item.done ? <del>{item.name}</del> : item.name}
                        secondary={
                            <React.Fragment>
                                <CustomTypography fc={item.done.toString()}>
                                    {item.desc || ""}
                                </CustomTypography>
                            </React.Fragment>
                        }
                    />
                    {item.quantity > 0 &&
                    <Quantity
                        style={{animationDelay: `1.${ind}s`}}
                        className={item.done ?
                            anim.expanded(anim.fadeIn, "disabled") :
                            anim.expanded(anim.fadeInRight, "quantity_label")}
                    >
                        {`x${item.quantity}`}
                    </Quantity>}
                    <MoreHorizIcon onClick={helper.handleMenuList}/>
                    <ItemMenu
                        anchorEl={anchorEl}
                        handleClose={helper.handleClose}
                        editElement={helper.editElement}
                        removeElement={helper.removeItem(item._id)}
                    />
                </CustomListItem>
                <div className={item.done ? "line check" : "line"}/>
            </ListItemWrapper>
            <Divider variant="inset" component="li" className={anim.fadeInRight} />
        </React.Fragment>
    );
};

export default ListElement;