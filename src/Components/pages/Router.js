import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import ListItems from "./ListItems";
import {useSelector} from "react-redux";
import Layout from "../Layout/Layout";
import BgLoader from "../Loader/BGLoader";
import Start from "./Start";
import LoginPage from "./Login";
import {useLoader} from "../../Hooks";
import UsersPage from "./UsersPage";
import UserPage from "./UserPage";

const Router = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const isGuest = useSelector(state => state.guestSession.isGuest);
    const jwtToken = useSelector(state => state.auth.jwtToken);
    const { isLoader } = useLoader();

    if (isLoader) {
        return <BgLoader />
    }

    return (
            <>{(isAuth && jwtToken) || isGuest ?
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/items/:id" element={<ListItems />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/user/:id" element={<UserPage />} />
                    </Routes>
                </Layout>
                :
                    <Routes>
                        <Route path="/" element={<Start />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
            }</>
    );
};

export default Router;