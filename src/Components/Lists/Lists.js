import {useEffect, useState} from "react";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import {ItemsList, StyledLoader} from "../List/Styled";
import { ApiHelper } from "../../service/api";
import { useDispatch, useSelector } from "react-redux";
import {CircularProgress, ListItem} from "@mui/material";
import ListElement from './ListItem';
import {listsHelper} from "./helper";
import {anim} from "../../styles";
import {EmptyList, TitleList} from "./Styled";
import Subscribes from "./Subscribes";
import {BottomNavigation} from "../Navigation";

const Lists = () => {
    const [list, setList] = useState([]);
    const [listItem, setListItem] = useState([]);
    const userId = useSelector(state => state.auth.userId);
    const listRender = useSelector(state => state.auth.list_render);
    const isGuest = useSelector(state => state.guestSession.isGuest);
    const guestList = useSelector(state => state.guestSession.lists);
    const [isLoader, setIsLoader] = useState(false);

    const dispatch = useDispatch();

    const apiHelper = new ApiHelper('list');

    const helper = listsHelper({
        setList, guestList, dispatch, apiHelper, setIsLoader, setListItem, listItem, userId
    })

    useEffect(() => {
        helper.getLists(isGuest)
    }, [listRender])

    useEffect(() => {
        helper.getAllItems(isGuest)
    }, [])

    useEffect(() => {
        helper.getLists(isGuest)
    }, [])


    return (
        <>
            {isLoader && !isGuest ?
                <StyledLoader>
                    <CircularProgress/>
                </StyledLoader>
            :
            <ItemsList>
                <TitleList>My lists</TitleList>
                {list.length > 0 ? list.map((item, ind) => <React.Fragment key={item._id}>
                    <ListElement key={item._id} item={item} ind={ind} listItem={listItem} />
                        <Divider variant="inset" component="li" className={anim.fadeInRight} />
                </React.Fragment>
                ) : <EmptyList className={anim.fadeIn}>
                    Empty list. Click on + to add new list.
                </EmptyList>}
            </ItemsList>}
            <Subscribes />
            <BottomNavigation />
        </>

    )
}

export default Lists;