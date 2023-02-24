import {removeList as removeGuestList} from "../../store/guestReducer";
import {editItem, handleListName, handleListRender, handleSubscribesRender} from "../../store/listReducer";
import {isSwapper as handleSwap} from "../../store/swapperReducer";


export const listItemHelper = ({ guestItemList, listItem, isGuest, setIsRemoveLoader, dispatch, apiHelper, navigate, setAnchorEl, item }) => {

    const getDoneCounting = (id) => {
        let currArray = [];
        if (isGuest) {
            currArray = guestItemList.filter(item => item.owner === id);
        } else {
            currArray = listItem.filter(item => item.owner === id);
        }

        const all = currArray.length;
        const done = currArray.filter(item => item.done).length

        return {all, done}
    }

    const removeList = () => {
        if (isGuest) {
            setIsRemoveLoader({id:item._id, action: true})
            setTimeout(() => {
                dispatch(removeGuestList(item._id))
                dispatch(handleListRender(true))
                setIsRemoveLoader({id: "", action: false})
            }, 500)
        } else {
            setIsRemoveLoader({id: item._id, action: true})
            apiHelper.removeItem(item._id)
                .then(() => dispatch(handleListRender(true)))
                .then(() => setIsRemoveLoader({id: "", action: false}))
        }
    }

    const getLink = (id, itemName) => {
        return () => {
            navigate(`/items/${id}`)
            dispatch(handleListName(itemName))
        }

    }

    const editList = () => {
        dispatch(editItem({
            type: 'list',
            id: item._id,
            name: item.name,
        }))
        dispatch(handleSwap(true))
    }

    const handleMenuList = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => setAnchorEl(null);

    return { getDoneCounting, removeList, editList, getLink, handleMenuList, handleClose }
}

export const listsHelper = ({ setList, guestList, dispatch, apiHelper, setIsLoader, setListItem, listItem, userId }) => {
    const getLists = (isGuest) => {
        if (isGuest) {
            setList(guestList)
            dispatch(handleListRender(false))
        } else {
            apiHelper.getListOwner(userId, setList)
                .then(() => {
                    dispatch(handleListRender(false))
                    setIsLoader(false)
                })
        }
    }

    const getAllItems = (isGuest) => {
        if (!isGuest) {
            apiHelper.getAllItems()
                .then((r) => setListItem([...listItem, ...r.data]))
        }
    }

    return { getLists, getAllItems };
}

export const subscribesHelper = ({
                                     apiHelper,
                                     userId,
                                     setListOverAll,
                                     setListDescribes,
                                     listOverall,
                                     listDescribes,
                                     setFilteredList,
                                     setRenderList,
                                     dispatch
}) => {
    const getOverall = () => {
        apiHelper.getOverall(userId, setListOverAll)
            // .then(() => setRenderList(false))

    }
    const getAllLists = () => {
        apiHelper.getAllLists()
            .then(r => (setListDescribes(r.data), dispatch(handleSubscribesRender(false))))
    }

    const getFilteredSubscribesLists = () => {
        if (listOverall.length > 0 && listDescribes.length > 0) {
            setFilteredList(listOverall.map(e => ({owner: e.listOwner, id: e._id, lists:listDescribes.find(el => el._id === e.listID)})))
        }
    }



    return { getOverall, getAllLists, getFilteredSubscribesLists }
}

export const subscribesItemHelper = ({ apiHelper, id, setIsLoader, navigate, setAnchorEl, renderList, dispatch }) => {
    const removeOverallList = () => {
        setIsLoader(true)
        apiHelper.removeOverallItem(id)
            .then(() => (setIsLoader(false), dispatch(handleSubscribesRender(true))))
    }

    const linkToItem = (id) => {
        return () => {
            navigate(`/items/${id}`)
        }
    }

    const handleMenuList = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => setAnchorEl(null);

    return { removeOverallList, linkToItem, handleMenuList, handleClose }
}