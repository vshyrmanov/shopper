import {isAuth, isToken, userId} from "../../store/listReducer";
import {isGuest} from "../../store/guestReducer";

export const loginHelper = ({
                                setRegValue,
                                regValue,
                                apiHelper,
                                registerForm,
                                loginForm,
                                dispatch,
                                setError,
                                setClose,
                                navigate,
                                setButtonLoader,
}) => {
    const handleFirstName = (e) => setRegValue({...regValue, firstName: e.target.value})
    const handleLastName = (e) => setRegValue({...regValue, lastName: e.target.value})
    const handleLogin = (e) => setRegValue({...regValue, login: e.target.value})
    const handlePassword = (e) => setRegValue({...regValue, password: e.target.value})

    const handleCloseError = () => setError({isError: false, text: ""});

    const clearForm = () => {
        setRegValue({
            firstName: "", lastName: "", login: "", password: ""
        })
    }

    const handleClose = () => {
        clearForm()
        setClose(true)
        navigate('/');
    }

    const sendRegister = () => {
        setButtonLoader(true)
        apiHelper.register(registerForm)
            .then((response) => {
                dispatch(userId(response.userId))
                dispatch(isAuth(true))
                dispatch(isToken(response.token))
            })
            .then(() => {
                clearForm()
                navigate('/');
                setButtonLoader(false)
            })
            .catch((e) => setError({isError: true, text: e.message}))
    }

    const sendLogin = () => {
        setButtonLoader(true)
        apiHelper.login(loginForm)
            .then((response) => {
                dispatch(userId(response.userId))
                dispatch(isAuth(true))
                dispatch(isToken(response.token))
            })
            .then(() => {
                handleClose()
                navigate('/');
                setButtonLoader(false)
            })
            .catch((e) => setError({isError: true, text: e.message}))
    }

    const loginGuest = () => {
        setClose(true)
        setTimeout(() =>
        {
            dispatch(isGuest(true))
            navigate('/');
        }, 500)
    }


    return { handleFirstName, handleLastName, handleLogin, handlePassword, sendRegister, sendLogin, handleCloseError, loginGuest  }
}