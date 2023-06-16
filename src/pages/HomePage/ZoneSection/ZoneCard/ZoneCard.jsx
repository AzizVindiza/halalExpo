import React from 'react';
import './zoneCard.sass'
import ZoneCardSmall from "./ZoneCardSmall/ZoneCardSmall";
import fashion from  "./fashionZone.png"
import food from "./foodZone.png"
import pic from './Rectangle 28.png'
import {useTranslation} from "react-i18next";

const ZoneCard = () => {
    const {t} = useTranslation()

    return (
        <section className={"zoneCard"}>
         <ZoneCardSmall item={t("zoneSection.tradeZone",{ returnObjects: true })} img={pic}/>
         <ZoneCardSmall item={t("zoneSection.investZone",{ returnObjects: true })} img={pic}/>
         <ZoneCardSmall item={t("zoneSection.fashionZone",{ returnObjects: true })} img={fashion}/>
         <ZoneCardSmall item={t("zoneSection.foodZone",{ returnObjects: true })} img={food}/>
         <ZoneCardSmall item={t("zoneSection.nationalZone",{ returnObjects: true })} img={pic}/>
        </section>
    );
};

export default ZoneCard;