import React, {useEffect, useState} from 'react';
import {ApiHelper} from "../../service/api";
import List from '@mui/material/List';
import {useSelector} from "react-redux";
import { UserSpan } from "./Styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserList from "./UserList";
import {userHelper} from "./helper";
import {CircularProgress} from "@mui/material";

const User = ({ user }) => {
    const [userInfo, setUserInfo] = useState({});
    const [userList, setUserList] = useState([]);
    const [listOverall, setListOverall] = useState([]);
    const [renderList, setRenderList] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const apiHelper = new ApiHelper();
    const userId = useSelector(state => state.auth.userId);
    const helper = userHelper({
        user, apiHelper, setUserList, setUserInfo, setListOverall, setRenderList, setIsLoader
    })
    useEffect(() => {
        helper.getUser()
        helper.getListOwner()
    }, [])

    useEffect(() => {
        helper.getListOverall(userId)
    }, [renderList])

    return (
        <>
            {userInfo.firstName && <UserSpan>
                {`${userInfo.firstName} ${userInfo.lastName || ""}`}
                <AccountCircleIcon fontSize="large" />
            </UserSpan>}
            {isLoader ? <CircularProgress /> : <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {userList.length > 0 && userList.map(list =>
                    <UserList
                        key={list._id}
                        list={list}
                        listOverall={listOverall}
                        setRenderList={setRenderList}
                        userInfo={userInfo}
                    />
                )}
            </List>}
        </>
    );
};

export default User;