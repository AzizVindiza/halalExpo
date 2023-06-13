import React from 'react';
import "./start.sass"
import svg from "./1.svg"
import svg2 from "./2.svg"
import svg3 from "./3.svg"
import svg4 from "./svg4.png"
import svg5 from "./svg5.png"
import svg6 from "./svg6.png"
import {Link} from "react-router-dom";
const StartSection = () => {
    return (
        <section className="start">
            <div className="container start__container">
                <div className="start__wrapper">

                    <div className="wrapp">
                        <h4 className="start__h4">Все о зонах HIT Expo 2023</h4>
                        <p className="start__p">Выставка представляет уникальные зоны, в которых каждый посетитель найдет для себя что-то интересное. Здесь вы сможете рассмотреть главные зоны выставки и их преимущества:</p>
                    </div>

                    <div className="start__content">
                        <div className="start__block">
                            <div className="start__svg">
                                <img src={svg} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">
                                <Link to={"trade"}>
                                    Trade Zone
                                </Link>
                            </h3>
                        </div>
                        <div className="start__block">
                            <div className="start__svg">
                                <img src={svg4} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">
                                <Link to={"invest"}>
                                    Invest Zone
                                </Link>
                            </h3>
                        </div>
                        <div className="start__block">
                            <div className="start__svg">
                                <img src={svg3} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">Food Zone</h3>
                        </div>
                        <div className="start__block">
                            <div className="start__svg">
                                <img src={svg2} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">Fashion Zone</h3>
                        </div>
                        <div className="start__block">
                            <div className="start__svg">
                                <img src={svg5} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">National attribute zone</h3>
                        </div>
                        {/*<div className="start__block">*/}
                        {/*    <div className="start__svg">*/}
                        {/*        <img src={svg6} alt="" className="start__img"/>*/}
                        {/*    </div>*/}
                        {/*    <h3 className="start__h3">halal zone</h3>*/}
                        {/*</div>*/}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default StartSection;