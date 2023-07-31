import React, {useContext} from 'react';
import "./start.sass"
import svg from "./1.svg"
import svg2 from "./2.svg"
import svg3 from "./3.svg"
import invest from "./invest.svg"
import svg4 from "./svg4.png"
import svg5 from "./svg5.png"
import svg6 from "./svg6.png"
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";
const StartSection = () => {
    const {t} = useTranslation()

    return (
        <section className="start">
            <div className="container start__container">
                <div className="start__wrapper">

                    <div className="wrapp">
                        <h4 className="start__h4">{t("startSection.title")}</h4>
                        <p className="start__p">{t("startSection.text")}</p>
                    </div>

                    <div className="start__content">
                        <Link to={"tradezone"} className="start__block">
                            <div className="start__svg">
                                <img src={svg} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">
                                <div>
                                    Trade Zone
                                </div>
                            </h3>
                        </Link>
                        <Link to={"invest"} className="start__block">
                            <div className="start__svg">
                                <img src={invest} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">
                                <div>
                                    Invest Zone
                                </div>
                            </h3>
                        </Link>
                        <Link to={"FoodZone"} className="start__block">
                            <div className="start__svg">
                                <img src={svg3} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">Food Zone</h3>
                        </Link>
                        <Link to={"fashionzone"} className="start__block">
                            <div className="start__svg">
                                <img src={svg2} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">Fashion Zone</h3>
                        </Link>
                        <a href={"#national"} className="start__block">
                            <div className="start__svg">
                                <img src={svg5} alt="" className="start__img"/>
                            </div>
                            <h3 className="start__h3">National attribute zone</h3>
                        </a>
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