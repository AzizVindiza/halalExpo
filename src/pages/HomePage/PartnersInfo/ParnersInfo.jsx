import React from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import info from "./info.gif"
import general from "./general.svg"
import times from "./times.svg"


const PartnersSection = () => {
    return (
        <section className="partners">
            <h2 className="partners__title">
                Информационные партнеры
            </h2>
            <div className="container partners__container">
                <div className="partners__card">
                    <img className={'partners__img'} src={times} alt=""/>
                    <h2 className="partners__h2">
                        Tentimes

                    </h2>
                </div>
                <div className="partners__card">
                    <img className={'partners__img'} src={general} alt=""/>
                    <h2 className="partners__h2">
                        Generalexpo

                    </h2>
                </div>
                <div className="partners__card">
                    <img className={'partners__img'} src={info} alt=""/>
                    <h2 className="partners__h2">
                        Expomap

                    </h2>
                </div>
            </div>
            <a className="speaker__btn partners__btn" href="">
                <Btn m={"big btn_border"} type="button" text="Стать партнером"/>
            </a>

        </section>
    );
};

export default PartnersSection;