import React, {useCallback, useEffect, useState} from 'react';
import {ApiHelper} from "../../service/api";
import {usersHelper} from "./helper";
import {useDispatch, useSelector} from "react-redux";
import UserSearch from "./UserSearch";
import SubscribesList from "./SubscribesList";
import UsersListItem from "./UsersListItem";
import {EmptySpan} from "./Styled";

const UsersList = () => {
    const [list, setList] = useState([]);
    const [isEmptyList, setIsEmptyList] = useState(false);
    const [currentSubscribes, setCurrentSubscribes] = useState([]);
    const apiHelper = new ApiHelper();
    const userId = useSelector(state => state.auth.userId);
    const isLoader = useSelector(state => state.subscribes.isLoader)
    const dispatch = useDispatch();
    const helper = usersHelper({
        apiHelper, setList, userId, dispatch, setCurrentSubscribes
    })

    const handleSubscribe = useCallback((form, setLoader) => {
        helper.subscribeOn(form, setLoader)
    }, [])

    useEffect(() => {
        helper.getCurrentSubscribes(userId)
    }, [isLoader])

    return (
        <>
            <UserSearch setFilteredList={setList} setIsEmptyList={setIsEmptyList} />
            {list.length > 0 ? list.map(user =>
                    <UsersListItem
                        key={user.id}
                        user={user}
                        handleSubscribe={handleSubscribe}
                        currentSubscribes={currentSubscribes}
                    />
                ) : isEmptyList ? <EmptySpan>User not found</EmptySpan> : ""
            }
            <SubscribesList />
        </>
    );
};

export default UsersList;