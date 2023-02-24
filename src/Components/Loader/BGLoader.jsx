import React from 'react';
import {Loader} from "./Styled";
import pack4 from '../../assets/package4.webp';
import {anim} from "../../styles";

const BgLoader = () => {

    return (
        <Loader>
            <img src={pack4} alt="pack4" className={anim.wobble} />
        </Loader>
    );
};

export default BgLoader;