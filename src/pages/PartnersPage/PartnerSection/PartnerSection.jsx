import React from 'react';
import logo from "./logo.png"
import "./partnerSection.sass"
const PartnerSection = () => {
    return (
        <section className={'partnerSection'}>
            <div className="container partnerSection__container">
                <div className="partnerSection__content">
                    <div className="partnerSection__inner">
                        <h2 className="partnerSection__h2">Партнеры <span className={'partnerSection__span'}>HIT EXPO</span></h2>
                        <p className="partnerSection__p">Стать партнером Halal Investment and Trade Expo 2023 - это возможность установить важные деловые связи в халяльной индустрии и получить целый ряд преимуществ:</p>
                    </div>
                    <div className="partnerSection__pic">
                        <img src={logo} className={'partnerSection__image'} alt=""/>
                    </div>
                </div>
                <div className="partnerSection__wrapper">
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                    <div className="partnerSection__block"></div>
                </div>
            </div>

        </section>
    );
};

export default PartnerSection;