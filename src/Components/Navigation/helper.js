import {isSwapper as handleSwap} from "../../store/swapperReducer";
import {editItem} from "../../store/listReducer";

export const navigationHelper = ({dispatch}) => {
    const toggleSwapper = () => dispatch(handleSwap(true));

    return { toggleSwapper }
}

export const SwapperHelper = ({dispatch, setOpen}) => {
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        dispatch(handleSwap(newOpen))
    };

    const toggleSwapper = (isSwapper) => {
        if (isSwapper) {
            setOpen(true)
        } else {
            setOpen(false)
            dispatch(editItem({}))
        }
    }



    return { toggleDrawer, toggleSwapper }
}