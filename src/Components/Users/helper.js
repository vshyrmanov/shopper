import {isLoader, isRenderList} from "../../store/subscribesReducer";

export const usersHelper = ({ apiHelper, setList, dispatch, setCurrentSubscribes }) => {
    const getList = () => {
        apiHelper.getAllUsers()
            .then((r) => setList(r.data))
    }

    const subscribeOn = ( form, setLoader ) => {
        setLoader(true)
        dispatch(isLoader(true))
        apiHelper.subscribeOn(form)
            .then(() => dispatch(isRenderList(true)))
            .then(() => {
                setLoader(false)
                dispatch(isLoader(false))
            })
    }

    const getCurrentSubscribes = (id) => {
        apiHelper.getUserSubscriptions(id)
            .then((r) => setCurrentSubscribes(r.data))
    }

    return { getList, subscribeOn, getCurrentSubscribes }
}

export const searchHelper = ({ apiHelper, setList, setValue, value, setFilteredList, list, setIsEmptyList }) => {
    const getList = () => {
        apiHelper.getAllUsers()
            .then((r) => setList(r.data))
    }
    const searchUser = () => {
        if (!value) {
            setFilteredList([])
        }
        let result = list.filter(e =>
            (e.login.includes(value) ||
                e.firstName.toLowerCase().includes(value.toLowerCase()) ||
                e.lastName?.toLowerCase().includes(value.toLowerCase())
            ) && value.length > 0
        )
        if (result.length < 1 && value.length > 0) {
            setIsEmptyList(true)
        } else {
            setIsEmptyList(false)
        }
        setFilteredList(result)
    }
    const handleValue = e => setValue(e.target.value)
    const clearInput = () => setValue("");

    return { getList, handleValue, clearInput, searchUser }
}

export const subscribesListHelper = ({ apiHelper, setList, setUserList, dispatch, setIsLoader }) => {
    const getList = () => {
        setIsLoader(true)
        apiHelper.getAllUsers()
            .then((r) => setUserList(r.data))
            .then(() => {
                dispatch(isRenderList(false))
                dispatch(isLoader(false))

            })
    }
    const getListOfSubscribes = (id, userList) => {
        apiHelper.getUserSubscriptions(id)
            .then((r) => r.data)
            .then((r) => {
                if (userList.length > 0) {
                    setList(r.map(e => userList.find(el => el.id === e.userId)))
                    setIsLoader(false)
                }
            })
    }

    return { getListOfSubscribes, getList }
}

export const SubListItemHelper = ({ apiHelper, navigate, dispatch, setIsLoader }) => {
    const removeSubscribe = (id) => {
        setIsLoader(true)
        dispatch(isLoader(true))
        apiHelper.removeSubscribe(id)
            .then(() => dispatch(isRenderList(true)))
            .then(() => (setIsLoader(false), dispatch(isLoader(false))))
    }

    const linkTo = (id) => navigate(`/user/${id}`)

    return { linkTo, removeSubscribe  }
}