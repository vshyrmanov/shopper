import {checkDone as guestCheckDone, removeItem as removeGuestItem} from "../../store/guestReducer";
import {editItem, handleItemsRender} from "../../store/listReducer";
import {isSwapper as handleSwap} from "../../store/swapperReducer";

export const listItemHelper = ({ isGuest, guestList, dispatch, apiHelper, setIsRemoveLoader, item, setAnchorEl, setIsLoader }) => {
    const checkDone = (id) => {
        return () => {
            if (isGuest) {
                const obj = guestList.map(list => list._id === id ? {...list, done:true} : list);
                dispatch(guestCheckDone(obj))
                dispatch(handleItemsRender(true))
            } else {
                setIsLoader(true)
                apiHelper.checkedDone(id)
                    .then(() => dispatch(handleItemsRender(true)))
                    // .then(() => setIsLoader(false))
            }
        }
    }

    const cancelDone = (id) => {
        return () => {
            if (isGuest) {
                const obj = guestList.map(list => list._id === id ? {...list, done:false} : list);
                dispatch(guestCheckDone(obj))
                dispatch(handleItemsRender(true))
            } else {
                setIsLoader(true)
                apiHelper.cancelDone(id)
                    .then(() => dispatch(handleItemsRender(true)))
                    // .then(() => setIsLoader(false))
            }
        }
    }

    const removeItem = (id) => {
        return () => {
            if (isGuest) {
                setIsRemoveLoader({action: true, id})
                setTimeout(() => {
                    dispatch(removeGuestItem(id));
                    dispatch(handleItemsRender(true))
                    setIsRemoveLoader({action: false, id: ""})
                }, 500)
            } else {
                setIsRemoveLoader({action: true, id})
                apiHelper.removeItem(id)
                    .then(() => dispatch(handleItemsRender(true)))
                    .then(() => setIsRemoveLoader({action: false, id: ""}))
            }
        }
    }

    const editElement = () => {
        dispatch(editItem({
            type: 'item',
            name: item.name,
            desc: item.desc,
            quantity: item.quantity,
            id: item._id,
        }))
        dispatch(handleSwap(true))
    }

    const handleMenuList = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => setAnchorEl(null);

    return { checkDone, cancelDone, removeItem, editElement, handleMenuList, handleClose }
}

export const listHelper = ({dispatch, setList, owner, setIsLoader, guestList, apiHelper, setAnchorFilter}) => {
    const getList = (isGuest) => {
        if (isGuest) {
            setList(guestList.filter(item => item.owner === owner))
            dispatch(handleItemsRender(false))
        } else {
            apiHelper.getItems(owner, setList)
                .then(() => {
                    setIsLoader(false)
                    dispatch(handleItemsRender(false))
                })
        }
    }
    const handleMenuList = (event) => {
        setAnchorFilter(event.currentTarget)
    }

    return { getList, handleMenuList }
}

export const filterHelper = ({ setAnchorEl }) => {
    const handleClose = () => setAnchorEl(null);
    return { handleClose }
}