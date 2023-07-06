import React from 'react';
import './supportAdaptive.sass'
import rebub from "../image/Rebub.svg";
import trade from "../image/trade.svg";
import skyland from "../image/skyland.svg";
import ibic from "../image/IBIC.svg";
import bawada from "../image/bawaba.svg"
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
                            <img src={ibic} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                Корпорация IBIC
                            </span>

                    </div>
                    <div className="organizatorSection__box">
                        <div className="organizatorSection__img">
                            <img src={bawada} alt=""/>
                        </div>
                        <span className="organizatorSection__span">
                                Интегрированный портал - ОАЭ
                            </span>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default SupportAdaptive;