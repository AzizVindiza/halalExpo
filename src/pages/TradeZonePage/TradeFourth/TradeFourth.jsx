import React from 'react';
import "./tradeFourth.sass"
import TradeCard from "./TradeCard/TradeCard";


import regis from "../img/regis.svg"
import cost from "../img/cost.svg"
import stand from "../img/stand.svg"
import place from "../img/place.svg"
import present from "../img/present.svg"
import business from "../img/biznes.svg"


const TradeFourth = () => {
    return (
        <section className={"tradeFourth"}>
            <div className="tradeFourth__container container">
                <div className="tradeFourth__wrapper">
                    <div className="tradeFourth__row">
                        <TradeCard item={{h2:"Регистрация",img:regis}}/>
                        <TradeCard item={{h2:"Стоимость участия",img:cost}}/>
                        <TradeCard item={{h2:"Выбор стенда",img:stand}}/>
                        <TradeCard item={{h2:"Размещение и оформление стенда",img:place}}/>
                        <TradeCard item={{h2:"Презентация продуктов/услуг",img:present}}/>
                        <TradeCard item={{h2:"Бизнес-встречи и переговоры",img:business}}/>


                    </div>





                </div>
            </div>

        </section>
    );
};

export default TradeFourth;