import React, { useEffect, useState } from 'react';
import { Header, StyledAvatar, StyledBackward } from "./Styled";
import { anim }from '../../styles';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { useDispatch, useSelector } from "react-redux";
import { ApiHelper } from "../../service/api";
import HeaderMenu from "./HeaderMenu";
import {headerHelper} from "./helper";
import MainBG from '../../assets/main_bg.webp';

const HeaderLayout = () => {
    const [userName, setUserName] = useState({firstName: "", lastName: ""});
    const [shortName, setShortName] = useState("")
    const [isLoadAvatar, setIsLoadAvatar] = useState(false);
    const [listName, setListName] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const isGuest = useSelector(state => state.guestSession.isGuest);
    const userId = useSelector(state => state.auth.userId);
    const isListName = useSelector(state => state.auth.list_name);

    const dispatch = useDispatch();
    const apiHelper = new ApiHelper();
    const helper = headerHelper({
        dispatch, setAnchorEl, setIsLoadAvatar, apiGetHelper: apiHelper.getUser, setUserName, setShortName
    });

    useEffect(() => {
        setListName(isListName)
    }, [isListName])

    useEffect(() => {
        helper.getNames(userId)
    }, [userId])

    return (
        <Header>
            <div>
                <img src={MainBG} alt="main_bg" />
            </div>
            {listName && <StyledBackward>
                <h1 className={anim.fadeIn}>
                    {listName}
                </h1>
                <ArrowBackIosIcon
                    onClick={helper.backWards}
                    className={anim.fadeInUp}
                />
            </StyledBackward>}
            {!listName &&
            <StyledBackward>
                <h3 className={anim.fadeIn}>Welcome,
                    <span className={anim.fadeInd1s}>
                        {isGuest ? "Guest" : userName.firstName}
                    </span>
                </h3>
            </StyledBackward>}
            <StyledAvatar className={anim.fadeIn}>
                <IconButton onClick={helper.handleMenuList}>
                    <Avatar>
                        {isLoadAvatar ? <HourglassEmptyIcon /> : isGuest ? "G" : shortName}
                    </Avatar>
                </IconButton>
            </StyledAvatar>
            <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Header>
    );
};

export default HeaderLayout;