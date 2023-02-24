import React, { useState } from 'react';
import { StyledSlider, StyledStartPage } from "./Styled";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import BgLoader from "../Loader/BGLoader";
import { useLoader } from "../../Hooks";
import { anim } from "../../styles";

const Start = () => {
    const [isAnim, setIsAnim] = useState(true);
    const [close, setClose] = useState(false);
    const navigate = useNavigate();
    const { isLoader } = useLoader();
        setTimeout(() => {
            setIsAnim(!isAnim)
        }, 2500)

    const link = () => {
        setClose(true);
            setTimeout(() => {
                navigate('/login');
            }, 500)
    }

    if (isLoader) {
        return <BgLoader />
    }

    return (
        <StyledStartPage  className={close ? "animate__animated animate__slideOutRight" : ""}>
            <StyledSlider>
                <button className="slider" onClick={link}>
                    <div className="locker">
                        <h1>Get started</h1>
                        <ArrowForwardIosIcon />
                    </div>
                </button>
            </StyledSlider>
        </StyledStartPage>
    );
};

export default Start;