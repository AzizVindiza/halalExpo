import React, {useContext} from 'react';
import './zoneCard.sass'
import ZoneCardSmall from "./ZoneCardSmall/ZoneCardSmall";
import fashion from  "./fashionZone.png"
import food from "./foodZone.png"
import pic from './Rectangle 28.png'
import {CustomContext} from "../../../../Context";

const ZoneCard = () => {
    const {t} = useContext(CustomContext)
    return (
        <section className={"zoneCard"}>
         <ZoneCardSmall  item={t("zoneSection", { returnObjects: true })}/>
         {/*<ZoneCardSmall item={{pic:pic,name:"Invest Zone",time:"Дни: 29-30 июля",participant:"50+ бизнес идей",li:["Площадка для презентации проектов","Консультации от специалистов","Стратегическая зона","Открытый доступ ко всем зонам”","Возможность реализации проектов","Инвестиции от 100 000$"]}}/>*/}
         {/*<ZoneCardSmall item={{pic:fashion,name:"Fashion Zone",time:"Дни: 29-30 июля",participant:"30+ участников",li:["Демонстрация мусульманской моды","Реализация представленных моделей","Представление эксклюзивных моделей","Участие в “HIT-EXPO AWARDS”","Полнооборудованная гримерка","Профессиональная фотессесия"]}}/>*/}
         {/*<ZoneCardSmall item={{pic:food,name:"Food Zone",time:"Дни: 29-30 июля",participant:"50+ участников",li:["Участие “HIT EXPO AWARDS”","Презентация авторских блюд","Дегустация блюд”","Эскпертное мнение в области HoReCa","Возможность получение сертификации от Центра Халяль SFDA"]}}/>*/}
         {/*<ZoneCardSmall item={{pic:pic,name:"National atribute Zone",time:"Дни: 29-30 июля",participant:"6 стран",li:["Демонстрация мусульманской моды","Реализация представленных моделей”","Представление эксклюзивных моделей","Участие в “HIT-EXPO AWARDS””","Полнооборудованная гримерка","Профессиональная фотессесия"]}}/>*/}
        </section>
    );
};

export default ZoneCard;