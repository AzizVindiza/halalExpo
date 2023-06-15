import React from 'react';
import './zoneCard.sass'
import ZoneCardSmall from "./ZoneCardSmall/ZoneCardSmall";
import fashion from  "./fashionZone.png"
import food from "./foodZone.png"
import pic from './Rectangle 28.png'
import {useTranslation} from "react-i18next";

const ZoneCard = () => {
    const {t,i18n} = useTranslation()

    return (
        <section className={"zoneCard"}>
         <ZoneCardSmall item={t("zoneSection.tradeZone",{ returnObjects: true })} img={pic}/>
         <ZoneCardSmall item={t("zoneSection.tradeZone",{ returnObjects: true })} img={fashion}/>
        </section>
    );
};

export default ZoneCard;