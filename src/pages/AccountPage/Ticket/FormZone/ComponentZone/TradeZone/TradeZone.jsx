import React from 'react';
import SwiperZone from "../SwiperZone/SwiperZone";

const TradeZone = ({trade2,trade1,setClickTrade,nextRefTrade,prevRefTrade}) => {
    return (
        <div>
            <SwiperZone setClickTrades={setClickTrade} nextRefTrades={nextRefTrade} prevRefTrades={prevRefTrade} img={trade1} img2={trade2}/>
        </div>
    );
};

export default TradeZone;