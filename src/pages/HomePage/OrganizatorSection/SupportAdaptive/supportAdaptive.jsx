import React from 'react';
import './supportAdaptive.sass'
import rebub from "../image/Rebub.svg";
import trade from "../image/trade.svg";
import skyland from "../image/skyland.svg";
import adm from "../image/ADM.svg";
import avangard from "../image/avangard.svg";
import city from "../image/city.svg";
import smart from "../image/smart.svg";

const SupportAdaptive = () => {
    return (
        <div className={"supportAdaptive"}>
            <div className="supportAdaptive__wrapper">
                <div className="supportAdaptive__row">
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
                            <img src={trade} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                Торгово-промышленная палата Кыргызской Республики
                            </span>

                    </div>
                    <div className="organizatorSection__box">
                        <div className="organizatorSection__img">
                            <img src={skyland} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                SKYLAND
                            </span>

                    </div>
                    <div className="organizatorSection__box">
                        <div className="organizatorSection__img">
                            <img src={adm} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                ADM GROUP
                            </span>

                    </div>
                    <div className="organizatorSection__box">
                        <div className="organizatorSection__img">
                            <img src={avangard} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                               ODADMIRAL
                            </span>

                    </div>
                    <div className="organizatorSection__box">
                        <div className="organizatorSection__img">
                            <img src={city} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                CITY312
                            </span>

                    </div>
                    <div className="organizatorSection__box">
                        <div className="organizatorSection__img">
                            <img src={smart} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                ITC SMART
                            </span>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default SupportAdaptive;