import * as React from 'react';
import {Main, Content, Wrapper } from './Styled';
import { BottomNavigation } from "../Navigation";
import HeaderLayout from "./Header";
import BgLoader from "../Loader/BGLoader";
import {useLoader} from "../../Hooks";

const Layout = ({children}) => {
    const { isLoader } = useLoader();

    if (isLoader) {
        return <BgLoader />
    }

    return (
        <Main>
            <HeaderLayout />
            <Content>
                <Wrapper>
                    {children}
                </Wrapper>
            </Content>
            {/*<BottomNavigation />*/}
        </Main>
    )
}

export default Layout;