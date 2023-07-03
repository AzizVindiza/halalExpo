import React from 'react';
import './zoneCard.sass'
import ZoneCardSmall from "./ZoneCardSmall/ZoneCardSmall";


import fashion from  "./fashion.png"
import food from "./food.png"

import invest from "./invest.png"
import trade from "./trade.png"
import pic from './Rectangle 28.png'
import {useTranslation} from "react-i18next";

const ZoneCard = () => {
    const {t} = useTranslation()

    return (
        <section className={"zoneCard"}>
         <ZoneCardSmall item={t("zoneSection.tradeZone",{ returnObjects: true })} img={trade}/>
         <ZoneCardSmall item={t("zoneSection.investZone",{ returnObjects: true })} img={invest}/>
         <ZoneCardSmall item={t("zoneSection.fashionZone",{ returnObjects: true })} img={fashion}/>
         <ZoneCardSmall item={t("zoneSection.foodZone",{ returnObjects: true })} img={food}/>
         <ZoneCardSmall item={t("zoneSection.nationalZone",{ returnObjects: true })} img={National}/>
        </section>
    );
};

export default ZoneCard;