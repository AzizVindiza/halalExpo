import React from 'react';
import './tradePage.sass'
import back from './back.png'
import TradeSection from "./TradeSection/TradeSection";
import TradeStandSection from "./TradeStandSection/TradeStandSection";
import TradeStyleSection from "./TradeStyleSection/TradeStyleSection";
import TradeRegisSection from "./TradeRegisSection/TradeRegisSection";

const TradePage = () => {
    return (
        <section className={'tradePage'}>
            <div className="tradePage__img">
                <img src={back} alt=""/>
            </div>
                <TradeSection/>
                <TradeStandSection/>
                <TradeStyleSection/>
                <TradeRegisSection/>
        </section>
    );
};

export default TradePage;