import React from 'react';
import './zoneCard.sass'
import ZoneCardSmall from "./ZoneCardSmall/ZoneCardSmall";

import trade from "./trade.png"
import invest from "./invest.png"
import fashion from "./fashion.png"
import food from "./food.png"


import {useTranslation} from "react-i18next";
import ZoneCard2 from "./ZoneCardSmall/ZoneCard2";

const ZoneCard = () => {
    const {t} = useTranslation()

    return (
        <section className={"zoneCard"}>
            <div className="zoneCard__container container">
                <ZoneCardSmall item={t("zoneSection.tradeZone",{ returnObjects: true })} img={trade} />
                <ZoneCard2 item={t("zoneSection.investZone",{ returnObjects: true })} img={invest}/>
                <ZoneCardSmall item={t("zoneSection.fashionZone",{ returnObjects: true })} img={fashion} />
                <ZoneCard2 item={t("zoneSection.foodZone",{ returnObjects: true })} img={food}/>
                <ZoneCardSmall item={t("zoneSection.nationalZone",{ returnObjects: true })} img={fashion} />
            </div>

         {/*<ZoneCardSmall item={t("zoneSection.tradeZone",{ returnObjects: true })} img={trade}/>*/}
         {/*<ZoneCardSmall item={t("zoneSection.investZone",{ returnObjects: true })} img={invest}/>*/}
         {/*<ZoneCardSmall item={t("zoneSection.fashionZone",{ returnObjects: true })} img={fashion}/>*/}
         {/*<ZoneCardSmall item={t("zoneSection.foodZone",{ returnObjects: true })} img={food}/>*/}
         {/*<ZoneCardSmall item={t("zoneSection.nationalZone",{ returnObjects: true })} img={pic}/>*/}

        </section>
    );
};

export default ZoneCard;