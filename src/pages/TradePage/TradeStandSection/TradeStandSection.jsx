import React from 'react';
import './TradeStandSection.sass'
import TradeZoneCard from "./TradeZoneCard/TradeZoneCard";
import first from './first.svg'
import second from  './second.svg'
import third from './third.svg'
import fourth from './fourth.svg'
import Btn from "../../../components/Btn/Btn";

const TradeStandSection = () => {
    return (
        <section className={"tradeStand"}>
            <div className="tradeStand__container container">
                <h2 className="tradeStand__h2">Стенды</h2>
                <p className="tradeStand__p">
                    В зоне Trade доступны четыре вида стендов, разработанных для соответствия различным потребностям участников. Это включает стандартные стенды, сильвер-стенды,голд-стенды и премиум-стенды, которые предоставляют возможность выставить продукты и услуги вашей компании в наиболее эффективном и привлекательном виде
                </p>
                <div className="tradeStand__wrapper">
                    <TradeZoneCard item={{img: first,li:["Полки","Баннер"," Кресла"," Стол","Дисплей","Стойка ресепшн","Мусорная корзина","Стенды по периметру","Логотип компании","Место для рекламы"]}}/>
                    <TradeZoneCard item={{img: second,li:["Полки","Баннер"," Кресла"," Стол","Дисплей","Стойка ресепшн","Мусорная корзина","Стенды по периметру","Логотип компании","Место для рекламы"]}}/>
                    <TradeZoneCard item={{img: third,li:["Полки","Баннер"," Кресла"," Стол","Дисплей","Стойка ресепшн","Мусорная корзина","Стенды по периметру","Логотип компании","Место для рекламы"]}}/>
                    <TradeZoneCard item={{img: fourth,li:["Полки","Баннер"," Кресла"," Стол","Дисплей","Стойка ресепшн","Мусорная корзина","Стенды по периметру","Логотип компании","Место для рекламы"]}}/>
                </div>
                <Btn m={"tradeStand"} text={"Перейти к пакетам"}/>
            </div>

        </section>
    );
};

export default TradeStandSection;