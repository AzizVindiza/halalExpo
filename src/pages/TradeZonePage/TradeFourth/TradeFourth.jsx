import React from 'react';
import "./tradeFourth.sass"
import TradeCard from "./TradeCard/TradeCard";

import regis from "../img/regis.svg"

const TradeFourth = () => {
    return (
        <section className={"tradeFourth"}>
            <div className="tradeFourth__container container">
                <div className="tradeFourth__wrapper">
                    <div className="tradeFourth__row">
                        <TradeCard item={{h2:"Регистрация",img:regis}}/>
                        <TradeCard item={{h2:"Стоимость участия",img:regis}}/>
                        <TradeCard item={{h2:"Выбор стенда",img:regis}}/>

                    </div>
                    <div className="tradeFourth__row">
                        <TradeCard item={{h2:"Размещение и оформление стенда",img:regis}}/>
                        <TradeCard item={{h2:"Презентация продуктов/услуг",img:regis}}/>
                        <TradeCard item={{h2:"Бизнес-встречи и переговоры",img:regis}}/>

                    </div>




                </div>
            </div>

        </section>
    );
};

export default TradeFourth;