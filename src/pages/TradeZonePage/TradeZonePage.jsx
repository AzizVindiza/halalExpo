import React from 'react';
import TradeFirst from "./TradeFirst/TradeFirst";
import TradeSecond from "./TradeSecond/TradeSecond";
import img from "./TRADE ZONE.png";
import TradeThird from "./TradeThird/TradeThird";
import TradeFourth from "./TradeFourth/TradeFourth";

const TradeZonePage = () => {
    return (
        <>
            <TradeFirst/>
            <TradeSecond/>
            <TradeThird/>
            <TradeFourth/>
            {/*<div style={{width: "1440px"}}>*/}
            {/*    <InvestorImg src={InvestorImg} alt="fashion"/>*/}
            {/*</div>*/}
        </>
    );
};

export default TradeZonePage;