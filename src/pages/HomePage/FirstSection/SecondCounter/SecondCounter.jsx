import React, {useContext, useEffect, useRef, useState} from 'react';

import {AiOutlineArrowRight} from "react-icons/ai"
import "./secondCounter.sass"
import {CustomContext} from "../../../../Context";
import {useTranslation} from "react-i18next";
const SecondCounter = () => {
    const {t} = useTranslation()

    return (
        <section className={'secondCounter'}>
            <h2 className={'secondCounter__h2'}>{t("firstSection.Participants")}</h2>
            <div className="secondCounter__wrapper">
                 <h4 className="secondCounter__h4">500</h4>
            </div>
            <div className="secondCounter__block">
                <h3 className="secondCounter__h3">{t("firstSection.Participate")}</h3>
                <AiOutlineArrowRight color={"#ffffff"}/>
            </div>

        </section>
    );
};

export default SecondCounter