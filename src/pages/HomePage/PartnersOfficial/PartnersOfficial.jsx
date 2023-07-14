import React from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import car from './car.svg'
import cit from "./cit.svg"
import newline from "./newline.svg"
import battarey from "./battarey.svg"


const PartnersOfficial = () => {
    return (
        <section className="partners">
            <h2 className="partners__title">Партнеры мероприятия</h2>
            <div className="container partners__container">
                <div className="partners__card">
                    <img className={'partners__img'}  src={newline} alt=""/>
                    <h2 className="partners__h2">
                        Newline Itech
                    </h2>
                </div>
                <div className="partners__card">
                        <img className={'partners__img'}  src={cit} alt=""/>
                    <h2 className="partners__h2">
                        Conference
                        International & Translation
                    </h2>
                </div>
                <div className="partners__card ">
                    <img className={'partners__img car'}  src={car} alt=""/>
                    <h2 className="partners__h2">
                        Vip kortege
                    </h2>
                </div>
                <div className="partners__card ">
                    <img className={'partners__img'}  src={battarey} alt=""/>
                    <h2 className="partners__h2">
                        Бери заряд
                    </h2>
                </div>
            </div>
            <a className="speaker__btn partners__btn" href="">
                <Btn m={"big btn_border"} type="button" text="Стать партнером"/>
            </a>

        </section>
    );
};

export default PartnersOfficial;