import React from 'react';
import './tradePage.sass'
import TradeSection from "./TradeSection/TradeSection";
import TradeStandSection from "./TradeStandSection/TradeStandSection";
import TradeStyleSection from "./TradeStyleSection/TradeStyleSection";
import TradeRegisSection from "./TradeRegisSection/TradeRegisSection";

const TradePage = () => {
    return (
        <section className={'tradePage'}>
            <div className="tradePage__opacity">
                <TradeSection/>
                <TradeStandSection/>
                <TradeStyleSection/>
                <TradeRegisSection/>
            </div>


            
        </section>
    );
};

export default TradePage;