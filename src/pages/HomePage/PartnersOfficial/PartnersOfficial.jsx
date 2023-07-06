import React from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import img from './official.PNG'
import cit from "./cit.svg"
import newline from "./newline.svg"


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
                <div className="partners__card">
                    <img className={'partners__img'}  src={img} alt=""/>
                    <h2 className="partners__h2">
                        Компания “VIP KORTEGE”по доступной цене предоставляет  <br/>
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