import React, {useContext} from 'react';
import './NotFoundPage.sass'
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
    const {t,i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    console.log(t("zoneSection.tradeZone.li", { returnObjects: true }))
    return (
        <div className="notfound">

            <button onClick={()=>changeLanguage("ru")}>RU</button>
            <button onClick={()=>changeLanguage("en")}>EN</button>
        </div>
    );
};

export default NotFoundPage;