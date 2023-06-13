import React from 'react';
import trade from "../../TradePage/TradeSection/tradeSection.svg";
import './investSection.sass'
import TradeZoneCard from "../../TradePage/TradeStandSection/TradeZoneCard/TradeZoneCard";
import stand from "./stand.svg"
import Btn from "../../../components/Btn/Btn";

const InvestSection = () => {
    return (
        <section className={"invest"}>
            <div className="invest__container container">
                <h2 className="invest__h2">INVEST ZONE</h2>
                <div className="invest__img">
                    <img src={trade} alt=""/>
                    <div className="invest__img_text">1000+ участников</div>
                </div>
                <div className="invest__stand">
                    <TradeZoneCard item={{img:stand,li:["Полки","Баннер"," Кресла"," Стол","Дисплей","Стойка ресепшн","Мусорная корзина","Стенды по периметру","Логотип компании","Место для рекламы"]}}/>
                    <TradeZoneCard item={{img:stand,li:["Полки","Баннер"," Кресла"," Стол","Дисплей","Стойка ресепшн","Мусорная корзина","Стенды по периметру","Логотип компании","Место для рекламы"]}}/>
                </div>
                <Btn m={"invest"} text={"Перейти к пакетам"}/>


            </div>


        </section>
    );
};

export default InvestSection;