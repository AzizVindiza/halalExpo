import React from 'react';
import SwiperZone from "../SwiperZone/SwiperZone";
import SwiperFashion from "./SwiperFashion/SwiperFahion";

const FashionZone = ({fashion}) => {
    return (
        <div>
            <SwiperFashion fashion={fashion} />
        </div>
    );
};

export default FashionZone;