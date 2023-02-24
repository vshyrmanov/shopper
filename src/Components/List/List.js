import { useEffect, useState } from "react";
import * as React from 'react';
import {
    EmptyList, Filter,
    ItemsList,
    ItemsListWrapper,
    StyledLoader
} from "./Styled";
import { ApiHelper } from '../../service/api';
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import ListElement from "./ListElement";
import {anim} from "../../styles";
import {listHelper} from "./helper";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterMenu from "./FilterMenu";
import {handleFiltered, handleItemsRender} from "../../store/listReducer";
import useSWR from 'swr'
import axios from "axios";
import {BottomNavigation} from "../Navigation";

export const ListItems = ({owner}) => {
    const [list, setList] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [anchorFilter, setAnchorFilter] = useState(null);
    const dispatch = useDispatch();
    const itemsRender = useSelector(state => state.auth.items_render);
    const isGuest = useSelector(state => state.guestSession.isGuest);
    const guestList = useSelector(state => state.guestSession.listItem);
    // const filtered = useSelector(state => state.auth.filtered);
    // const [filter, setFilter] = useState({
    //     onlyDone: false,
    //     onlyUndone: false,
    //     sortByUndone: false,
    // })

    const apiHelper = new ApiHelper('item');

    const helper = listHelper({
        dispatch, setList, owner, setIsLoader, guestList, apiHelper, setAnchorFilter
    })
    const fetcher = (...args) => axios.get(...args).then(res => setList(res.data))
    const { data, error } = useSWR(`https://arcane-falls-56249.herokuapp.com/shopping/item/getItems/${owner}`,fetcher, {refreshInterval: 5000} )
    // console.log(data)

    useEffect(() => {
        helper.getList(isGuest)
    }, [itemsRender])

    useEffect(() => {
        helper.getList(isGuest)
    }, [])

    // const handleFilter = (type) => {
    //     setFilter({...filter, [type]: true})
    //     dispatch(handleFiltered(true))
    // }

    // const resetFilter = () => {
    //     setFilter({
    //         onlyDone: false,
    //         onlyUndone: false,
    //         sortByUndone: false,
    //     })
    //     helper.getList(isGuest)
    //     dispatch(handleFiltered(true))
    // }

    // useEffect(() => {
    //     if (filter.onlyDone) {
    //         setList(list.filter(e => e.done))
    //         dispatch(handleFiltered(false))
    //     }
    //     if (filter.onlyUndone) {
    //         setList(list.filter(e => !e.done))
    //         dispatch(handleFiltered(false))
    //     }
    //
    // }, [filtered, filter])


    return (
        <>
            <ItemsListWrapper>
                {isLoader && !isGuest ?
                    <StyledLoader>
                        <CircularProgress/>
                    </StyledLoader>
                    :
                    <ItemsList>
                        {/*<Filter>*/}
                        {/*    <FilterAltIcon onClick={helper.handleMenuList} />*/}
                        {/*    <FilterMenu*/}
                        {/*        anchorEl={anchorFilter}*/}
                        {/*        setAnchorEl={setAnchorFilter}*/}
                        {/*        handleFilter={handleFilter}*/}
                        {/*        resetFilter={resetFilter}*/}
                        {/*    />*/}
                        {/*</Filter>*/}
                        {list.length > 0 ?
                            list
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .sort((a, b) => a.done - b.done)
                                .map((item, ind) =>
                            <ListElement item={item} ind={ind} key={item._id} />
                        ) : <EmptyList className={anim.fadeIn}>
                            Empty list. Click on + to add new list.
                        </EmptyList>}
                    </ItemsList>}
            </ItemsListWrapper>
            <BottomNavigation />
        </>

    )
}

