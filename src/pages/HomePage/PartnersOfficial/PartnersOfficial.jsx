import React from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import img from './official.PNG'


const PartnersOfficial = () => {
    return (
        <section className="partners">
            <h2 className="partners__title">Партнеры</h2>
            <div className="container partners__container">
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