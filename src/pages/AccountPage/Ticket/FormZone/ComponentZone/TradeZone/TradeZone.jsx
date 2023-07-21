import React from 'react';
import SwiperZone from "../SwiperZone/SwiperZone";

const TradeZone = ({trade2,trade1}) => {
    return (
        <div>
            <SwiperZone img={trade1} img2={trade2}/>
        </div>
    );
};

export default TradeZone;