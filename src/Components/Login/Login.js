import React, { useState } from 'react';
import { GuestLink, Main } from "./Styled";
import { ApiHelper } from "../../service/api";
import {useDispatch} from "react-redux";
import login_bg from "../../assets/login_bg.jpg";
import BgLoader from "../Loader/BGLoader";
import { useNavigate } from "react-router-dom";
import {loginHelper} from "./helper";
import LoginForm from "../Form/LoginForm";
import { useLoader } from "../../Hooks";
import { anim } from "../../styles";
import { LoginAlert } from "../Alert";

const Login = () => {
    const [regValue, setRegValue] = useState({
        firstName: "",
        lastName: "",
        login: "",
        password: "",
    })
    const [error, setError] = useState({isError: false, text: ""});
    const [close, setClose] = useState(false);
    const [buttonLoader, setButtonLoader] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoader } = useLoader();

    const registerForm = {
        firstName: regValue.firstName,
        lastName: regValue.lastName,
        login: regValue.login,
        password: regValue.password,
    }

    const loginForm = {
        login: regValue.login,
        password: regValue.password,
    }

    const apiHelper = new ApiHelper();

    const helper = loginHelper({
        setRegValue, regValue, apiHelper, registerForm, loginForm, dispatch, setError, setClose, navigate, setButtonLoader
    })

    if (isLoader) {
        return <BgLoader />
    }

    return (
        <>
        <Main className={close ? anim.fadeOut : ""} bg={login_bg}>
            {error.isError &&
            <LoginAlert
                action={helper.handleCloseError}
                mainText="Error authentication"
                errorText={error.text}
            />}
            <LoginForm helper={helper} formValues={regValue} buttonLoader={buttonLoader} />
            <GuestLink >
                <span onClick={helper.loginGuest}>
                    Try it like a guest
                </span>
            </GuestLink>
        </Main>
        </>
    );
};

export default Login;