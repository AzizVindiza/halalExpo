import React from 'react';
import './MapSection.sass'
import Location from "./Location/Location";
import Btn from "../../../components/Btn/Btn";
const MapSection = () => {
    return (
        <section className="map">
            <h2 className="map__title container">Локации</h2>
            <div className="map__container container">
                <div className="map__tabs">
                    <Location h2={"Госрезиденция №2"} p={ "Отрасли: производство, строительство, \n" +
                        "инвестиционные проекты, и банковская деятельность "}/>
                    <Location h2={"Госрезиденция №2"} p={ "Отрасли: производство, строительство, \n" +
                        "инвестиционные проекты, и банковская деятельность "}/>
                </div>
                <div className="map__wrapper">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4607.7357179856745!2d74.60042399242414!3d42.87863699970236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e74697b7a5%3A0xb625d929c04e872e!2z0J_QsNGA0Log0J_QsNC90YTQuNC70L7QstCw!5e0!3m2!1sru!2skg!4v1682581919768!5m2!1sru!2skg"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <a href="" className="map__a">
                        <Btn m={"big"} type="button" text="Подробнее"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MapSection;