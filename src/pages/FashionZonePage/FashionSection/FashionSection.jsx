import React from 'react';
import "./fashionSection.sass"
import fashion from "../img/logo.png";




const FashionSection = () => {
    return (
        <section className={"fashionSection"}>
            <div className="fashionSection__container container">
                <div className="invest__wrapper">
                    <h2 className="invest__h2">FASHION ZONE</h2>
                    <div className="invest__row">
                        <div className="invest__img">
                            <img src={fashion} alt=""/>
                        </div>
                        <div className="invest__box">
                            <div className="invest__h3">20+ участников</div>
                            <div className={"invest__column"}>

                                <div className="invest__row2">
                                    <div className="invest__svg">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 28.0928L27.546 37.6388L46.6379 18.5469" stroke="#4387FF" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.75 28.0928L16.2959 37.6388M28.125 25.8761L35.3878 18.5469" stroke="#B3CEFC" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>

                                    <span className="invest__span">Лучшие и эксклюзивные  модели</span>
                                </div>
                                <div className="invest__row2">

                                    <div className="invest__svg">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 28.0928L27.546 37.6388L46.6379 18.5469" stroke="#4387FF" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.75 28.0928L16.2959 37.6388M28.125 25.8761L35.3878 18.5469" stroke="#B3CEFC" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span className="invest__span">Показ моды на берегу озера</span>
                                </div>
                                <div className="invest__row2">

                                    <div className="invest__svg">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 28.0928L27.546 37.6388L46.6379 18.5469" stroke="#4387FF" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.75 28.0928L16.2959 37.6388M28.125 25.8761L35.3878 18.5469" stroke="#B3CEFC" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>

                                    <span className="invest__span">Возможность выкупить модель прямо с показа</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="fashionSection__p">
                    Если ваш бизнес связан с модной индустрией, то в этой зоне вы сможете представить свои товары,
                    установить контакты с модными брендами и принять участие в модных показах.
                    Доступно только для предметов одежды и модных коллекций, соответствующих принципам модестности.
                </p>

            </div>

        </section>
    );
};

export default FashionSection;