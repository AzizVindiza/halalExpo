import React from 'react';
import "./hotel.sass"
import HotelCard from "./HotelCard/HotelCard";
const Hotel = () => {
    return (
        <div className={'hotel'}>
            <div className="hotel__container container ">
                <h2 className="hotel__h2">ГОСТИНИЦЫ</h2>
                <div className="hotel__wrapper">
                    <HotelCard/>

                </div>

            </div>

        </div>
    );
};

export default Hotel;