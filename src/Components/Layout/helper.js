import {handleListName, isAuth as setAuth, isToken, userId as setUserId} from "../../store/listReducer";
import {isGuest as handleIsGuest} from "../../store/guestReducer";

export const headerHelper = ({dispatch, setAnchorEl, setIsLoadAvatar, apiGetHelper, setShortName, setUserName}) => {
    const backWards = () => {
        window.history.back()
        dispatch(handleListName(""))
    }

    const handleMenuList = (event) => setAnchorEl(event.currentTarget)

    const getNames = (userId) => {
        if (userId) {
            setIsLoadAvatar(true);
            apiGetHelper(userId)
                .then(res => {
                    setUserName({
                        firstName: res.data.firstName,
                        lastName: res.data.lastName || ""
                    });
                    setShortName(
                        (res.data.firstName?.charAt(0).toUpperCase() || "") + (res.data.lastName?.charAt(0).toUpperCase() || "")
                    )
                    setIsLoadAvatar(false);
                })
        }
    }

    return { backWards, handleMenuList, getNames }
}

export const headerMenuHelper = ({dispatch, setAnchorEl, setOpenDialog, navigate }) => {
    const handleClose = () => setAnchorEl(null);
    const handleClickOpen = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    const logOut = () => {
            dispatch(setUserId(""))
            dispatch(setAuth(false))
            dispatch(isToken(""))
            handleCloseDialog()
            navigate('/');
    }

    const usersLink = () => navigate('/users');

    const guestLogOut = () => {
        dispatch(handleIsGuest(false));
        navigate('/');
    }

    return {
        handleClose,
        handleClickOpen,
        handleCloseDialog,
        logOut,
        guestLogOut,
        usersLink
    }
}