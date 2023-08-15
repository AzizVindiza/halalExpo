import React from 'react';
import "./investSection.sass"
import invest from "../img/logo.png"
import zones from "../img/Zones.png"




const InvestSection = () => {
    return (
        <section className={"invest"}>
            <div className="invest__container container">
                <div className="invest__wrapper">
                    <h2 className="invest__h2">INVEST ZONE</h2>
                    <div className="invest__row">
                        <div className="invest__img">
                            <img src={zones} alt=""/>
                        </div>
                        <div className="invest__box">
                            <div className="invest__h3">50+ участников</div>
                            <div className={"invest__column"}>

                                <div className="invest__row2">
                                    <div className="invest__svg">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 28.0928L27.546 37.6388L46.6379 18.5469" stroke="#4387FF" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.75 28.0928L16.2959 37.6388M28.125 25.8761L35.3878 18.5469" stroke="#B3CEFC" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>

                                    <span className="invest__span">Перспективные инвестиционные проекты</span>
                                </div>
                                <div className="invest__row2">

                                    <div className="invest__svg">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 28.0928L27.546 37.6388L46.6379 18.5469" stroke="#4387FF" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.75 28.0928L16.2959 37.6388M28.125 25.8761L35.3878 18.5469" stroke="#B3CEFC" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span className="invest__span">Участие в увлекательных презентациях</span>
                                </div>
                                <div className="invest__row2">

                                    <div className="invest__svg">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 28.0928L27.546 37.6388L46.6379 18.5469" stroke="#4387FF" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.75 28.0928L16.2959 37.6388M28.125 25.8761L35.3878 18.5469" stroke="#B3CEFC" strokeWidth="5.775" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>

                                    <span className="invest__span">Развитие халяль-бизнеса</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>

        </section>
    );
};

export default InvestSection;