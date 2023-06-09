import React from 'react';
import adm from './image/ADM.svg'
import dfca from './image/DFCA.svg'
import ibic from './image/IBIC.svg'
import rebub from './image/Rebub.svg'
import skyland from './image/skyland.svg'
import smart from './image/smart.svg'
import avangard from './image/avangard.svg'
import ameca from "./image/ameca.svg"
import "./OrganizatorSection.sass"
const OrganizatorSection = () => {
    return (
        <section className={'organizatorSection'}>
            <div className="container organizatorSection__container">
                <h2 className="organizatorSection__h2">Организаторы</h2>
                <div className={'organizatorSection__img'}>
                    <img src={ameca} alt=""/>
                </div>
                <div className="organizatorSection__line"></div>
                <h3 className="organizatorSection__h3">ПРИ ПОДДЕРЖКЕ </h3>


                <div className="organizatorSection__wrapper">
                    <div className="organizatorSection__row">
                        <div className="organizatorSection__box">
                            <div className="organizatorSection__img">
                                <img src={rebub} alt=""/>
                            </div>
                            <span className="organizatorSection__span">
                                Правительство <br/>
                                Кыргызской Республики
                            </span>
                        </div>
                        <div className="organizatorSection__box">
                            <div className="organizatorSection__img">
                                <img src={ibic} alt=""/>
                            </div>
                            <span className="organizatorSection__span">
                                Корпорация IBIC
                            </span>

                        </div>

                    </div>
                    <div className="organizatorSection__row2">
                        <div className="organizatorSection__picture">
                            <img src={dfca} alt="" className="organizatorSection__img"/>
                            <img src={adm} alt="" className="organizatorSection__img"/>
                            <img src={skyland} alt="" className="organizatorSection__img"/>


                        </div>
                        <div className="organizatorSection__picture">
                            <img src={smart} alt="" className="organizatorSection__img"/>
                            <img src={avangard} alt="" className="organizatorSection__img"/>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default OrganizatorSection;