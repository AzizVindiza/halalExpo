import React from 'react';
import pic from "./карта3 1.png"
import "./mapsection.sass"
const MapSection = () => {
    return (
        <section className={'mapSection'}>
            <div className="container mapsection__conrainer">
                <div className="mapSection__block">

                    <div className="mapSection__image">
                        <h2 className="mapSection__h2">инвесторы hit expo </h2>
                        <img src={pic} alt="" className="mapSection__img"/>
                    </div>
                </div>
                <p className="mapSection__p">HIT Expo-2023 предоставляет вам возможность ознакомиться с профилями наших инвесторов, чтобы вы могли узнать об их экспертизе, бизнес-подходе и инвестиционной деятельности. Приглашенные инвесторы представляют различные отрасли и области, и их присутствие на нашем мероприятии открывает уникальные возможности для новых связей и партнерств. </p>
            </div>
        </section>
    );
};

export default MapSection;