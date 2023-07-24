import React from 'react';
import SwiperZone from "../SwiperZone/SwiperZone";
import SwiperFashion from "./SwiperFashion/SwiperFahion";

const FashionZone = ({fashion,setClickFashion,nextRefFashion,prevRefFashion}) => {
    return (
        <div>
            <SwiperFashion setClickFashions={setClickFashion} nextRefFashions={nextRefFashion} prevRefFashions={prevRefFashion}  fashion={fashion} />
        </div>
    );
};

export default FashionZone;