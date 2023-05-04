import React from 'react';
import pic from "./карта3 1.png"
import "./mapsection.sass"
const MapSection = () => {
    return (
        <section className={'mapSection'}>
            <div className="container mapsection__conrainer">
                <div className="mapSection__block">
                    <h2 className="mapSection__h2">Lorem Ipsum is simply dummy </h2>
                    <div className="mapSection__image">
                        <img src={pic} alt="" className="mapSection__img"/>
                    </div>
                </div>
                <p className="mapSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply </p>
            </div>
        </section>
    );
};

export default MapSection;