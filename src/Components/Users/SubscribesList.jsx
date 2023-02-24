import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {subscribesListHelper} from "./helper";
import {ApiHelper} from "../../service/api";
import {useNavigate} from "react-router-dom";
import List from '@mui/material/List';
import SubscribesListItem from "./SubscribesListItem";
import {MainSpan} from "./Styled";
import {CircularProgress} from "@mui/material";


const SubscribesList = () => {
    const [list, setList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const userId = useSelector(state => state.auth.userId);
    const renderList = useSelector(state => state.subscribes.listRender)
    const apiHelper = new ApiHelper();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const helper = subscribesListHelper({
        apiHelper, setList, setUserList, navigate, dispatch, setIsLoader
    })

    useEffect(() => {
        helper.getList()
    }, [renderList])

    useEffect(() => {
        helper.getListOfSubscribes(userId, userList);
    }, [userList])


    return (
        <>
            <MainSpan>My subscribes</MainSpan>
            {isLoader ? <CircularProgress size={30} /> : <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {list.length > 0 && list.map(user =>
                    <SubscribesListItem key={user.id} user={user}/>
                )}

            </List>}
        </>
    );
};

export default SubscribesList;