import React from 'react';
import SwiperZone from "../SwiperZone/SwiperZone";
import SwiperInvest from "./SwiperInvest/SwiperInvest";

const InvestZone = ({invest,invest2,invest3,invest4}) => {
    return (
        <div>
            <SwiperInvest invest={invest} invest2={invest2} invest3={invest3} invest4={invest4} />
        </div>
    );
};

export default InvestZone;