import React, {useContext, useEffect, useRef, useState} from 'react';

import {AiOutlineArrowRight} from "react-icons/ai"
import "./secondCounter.sass"
import {CustomContext} from "../../../../Context";
const SecondCounter = () => {
  const {t} = useContext(CustomContext)
    return (
        <section className={'secondCounter'}>
            <h2 className={'secondCounter__h2'}>{t("firstSection.Participants")}</h2>
            <div className="secondCounter__wrapper">
                 <h4 className="secondCounter__h4">1274</h4>
            </div>
            <div className="secondCounter__block">
                <h3 className="secondCounter__h3">{t("firstSection.Participate")}</h3>
                <AiOutlineArrowRight color={"#ffffff"}/>
            </div>

        </section>
    );
};

export default SecondCounter