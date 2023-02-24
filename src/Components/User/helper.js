
export const userHelper = ({ user, apiHelper, setUserInfo, setUserList, setListOverall, setRenderList, setIsLoader }) => {

    const getUser = () => {
        setIsLoader(true)
        if (user) {
            apiHelper.getUser(user)
                .then(r => setUserInfo(r.data))
                .then(() => setIsLoader(false))
        }
    }

    const getListOwner = () => {
        if (user) {
            apiHelper.getListOwner(user, setUserList)
                .then(() => setIsLoader(false))
        }
    }

    const getListOverall = (userId) => {
        apiHelper.getOverall(userId, setListOverall)
            .then(() => setRenderList(false))
    }

    return { getUser, getListOwner, getListOverall }
}

export const userListHelper = ({ setIsLoader, apiHelper, listOverall, setRenderList, form, id }) => {

    const handleAddOverallList = () => {
        setIsLoader(true)
        apiHelper.addOverallItem({...form, listID: id})
            .then(() => (setRenderList(true), setIsLoader(false)))
    }

    const removeOverList = () => {
        setIsLoader(true)
        let item = listOverall.find(e => e.listID === id)
        apiHelper.removeOverallItem(item._id)
            .then(() => (setRenderList(true), setIsLoader(false)))
    }

    return { handleAddOverallList, removeOverList }
}