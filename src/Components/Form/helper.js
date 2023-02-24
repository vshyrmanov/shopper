import {addItem, addList} from "../../store/guestReducer";
import {handleItemsRender, handleListRender} from "../../store/listReducer";
import {isSwapper as handleSwap} from "../../store/swapperReducer";
import {ApiHelper} from "../../service/api";


export const addFormHelper = ({dispatch, isGuest, listForm, itemForm, typeOfForm, count, setCount, values, setValues}) => {
    const apiHelper = new ApiHelper(typeOfForm);

    const addNewList = () => {
        if (isGuest) {
            dispatch(addList(listForm))
            dispatch(handleListRender(true))
            dispatch(handleSwap(false))
        } else {
            apiHelper.addItem(listForm)
                .then(() => {
                    dispatch(handleListRender(true))
                    dispatch(handleSwap(false))
                })
        }
    }

    const addNewItem = () => {
        if (isGuest) {
            dispatch(addItem(itemForm))
            dispatch(handleItemsRender(true))
            dispatch(handleSwap(false))
        } else {
            apiHelper.addItem(itemForm)
                .then(() => {
                    dispatch(handleItemsRender(true))
                    dispatch(handleSwap(false))
                })
        }
    }

    const updateItem = (id) => {
        return () => {
            apiHelper.editItem(id, itemForm)
                .then(() => {
                    dispatch(handleItemsRender(true))
                    dispatch(handleSwap(false))
                })
        }
    }

    const updateList = (id) => {
        return () => {
            apiHelper.editList(id, listForm)
                .then(() => {
                    dispatch(handleListRender(true))
                    dispatch(handleSwap(false))
                })
        }
    }

    const increment = () => setCount(count + 1);
    const decrement = () => count > 0 && setCount(count - 1);

    const handleItemName = (e) => {
        setValues({...values, itemName: e.target.value})
    }
    const handleListName = (e) => {
        setValues({...values, listName: e.target.value})
    }
    const handleDescription = (e) => {
        setValues({...values, desc: e.target.value})
    }

    return { addNewList, addNewItem, increment, decrement, handleItemName, handleListName, handleDescription, updateItem, updateList }
}