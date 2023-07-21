import React from 'react';
import SwiperZone from "../SwiperZone/SwiperZone";
import food from "../Picture/food-1.png";
import SwiperFood from "./SwiperFood/SwiperFood";

const FoodZone = ({food,food2}) => {
    return (
        <div>
            <SwiperFood food={food} food2={food2}/>
        </div>
    );
};

export default FoodZone;