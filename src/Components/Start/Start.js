import React, { useState } from 'react';
import { StyledSlider, StyledStartPage } from "./Styled";
import Package1 from '../../assets/package1.png';
import Package2 from '../../assets/package2.png';
import Package3 from '../../assets/package3.png';
import Package4 from '../../assets/package4.png';
import bottomBg from '../../assets/bottomPacks_1.png';
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
            {/*<img*/}
            {/*    style={isAnim ? {animationDelay: `2s`} : {animationDelay: `2s`}}*/}
            {/*    className={isAnim ? anim.expanded(anim.fadeIn, 'img_1') : anim.expanded(anim.fadeOut, 'img_1')}*/}
            {/*    src={Package1}*/}
            {/*    alt="Package1" />*/}
            {/*<img*/}
            {/*    style={isAnim ? {animationDelay: `1.5s`} : {animationDelay: `1.5s`}}*/}
            {/*    className={isAnim ? anim.expanded(anim.fadeIn, 'img_2') : anim.expanded(anim.fadeOut, 'img_2')}*/}
            {/*    src={Package2}*/}
            {/*    alt="Package2" />*/}
            {/*<img*/}
            {/*    style={isAnim ? {animationDelay: `1s`} : {animationDelay: `1s`}}*/}
            {/*    className={isAnim ? anim.expanded(anim.fadeIn, 'img_3') : anim.expanded(anim.fadeOut, 'img_3')}*/}
            {/*    src={Package3}*/}
            {/*    alt="Package3" />*/}
            {/*<img*/}
            {/*    style={isAnim ? {animationDelay: `0.5s`} : {animationDelay: `0.5s`}}*/}
            {/*    className={isAnim ? anim.expanded(anim.fadeIn, 'img_4') : anim.expanded(anim.fadeOut, 'img_4')}*/}
            {/*    src={Package4}*/}
            {/*    alt="Package4" />*/}
            {/*<img className="img_btm" src={bottomBg} alt="bottom" />*/}
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