import React from 'react';
import './OpportunitySection.sass'
import bg from './opportunity__bg.svg'
import bg393 from './opportunity__bg339.svg'
import six from "./opportunitySvg/center.svg"
import img from './box__img.svg'

import people from './opportunitySvg/people.svg'
import novator from './opportunitySvg/novator.svg'
import devel from './opportunitySvg/development.svg'
import dis from './opportunitySvg/dis.svg'
import lider from './opportunitySvg/lider.svg'
import inv from './opportunitySvg/investment.svg'
import buy from './opportunitySvg/buyers.svg'
import manu from './opportunitySvg/manufacture.svg'
import science from './opportunitySvg/science.svg'
import sales from './opportunitySvg/wholeSales.svg'
import {useTranslation} from "react-i18next";




const OpportunitySection = () => {
    const {t} = useTranslation()
    return (
        <section className="opportunity">
            <div className="opportunity__container container_fluid">
                <div className="opportunity__bg">
                    <picture>
                        <source media="(max-width:394px)" srcSet={bg393}/>
                        <img src={bg} alt="bg lines"/>
                    </picture>
                </div>
                <div className="opportunity__wrapper">
                    <div className="opportunity__center">
                        <span className="opportunity__span">
                            Возможность <br/> встретиться с
                        </span>
                    </div>
                    <div className="opportunity__row">
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={img} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Government")}</h3>
                        </div>
                    </div>
                    <div className="opportunity__row2">
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={dis} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Distributors")}</h3>
                        </div>
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={science} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Scientific")}</h3>
                        </div>
                    </div>
                    <div className="opportunity__row3">
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={buy} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Buyers")}</h3>
                        </div>
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={devel} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Politicians")}</h3>
                        </div>
                    </div>
                    <div className="opportunity__row4">
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={manu} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Manufacturers")}</h3>
                        </div>
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={people} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Consumers")}</h3>
                        </div>
                    </div>
                    <div className="opportunity__row5">
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={lider} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Opinion")}</h3>
                        </div>
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={inv} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Investors")}</h3>
                        </div>
                    </div>
                    <div className="opportunity__row6">
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={novator} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Innovators")}</h3>
                        </div>
                        <div className="opportunity__box">
                            <div className="opportunity__img box">
                                <img src={sales} alt=""/>
                            </div>
                            <h3 className="opportunity__h3 er">{t("opportunitySection.Retailers")}</h3>
                        </div>
                    </div>



















                    {/*<div className="opportunity__box box tired">*/}
                    {/*    <div className="opportunity__img">*/}
                    {/*        <img src={img} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="opportunity__h3 er">{t("opportunitySection.Government")}</h3>*/}
                    {/*</div>*/}
                    {/*<div className="opportunity__row">*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={dis} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Distributors")}</h3>*/}
                    {/*    </div>*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={science} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Scientific")}</h3>*/}
                    {/*    </div>*/}


                    {/*</div>*/}
                    {/*<div className="opportunity__row2">*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={buy} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Buyers")}</h3>*/}
                    {/*    </div>*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={devel} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Politicians")}</h3>*/}
                    {/*    </div>*/}


                    {/*</div>*/}
                    {/*<div className="opportunity__row3">*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={manu} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Manufacturers")}</h3>*/}
                    {/*    </div>*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={people} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Consumers")}</h3>*/}
                    {/*    </div>*/}


                    {/*</div>*/}
                    {/*<div className="opportunity__row4">*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={lider} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Opinion")}</h3>*/}
                    {/*    </div>*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={inv} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Investors")}</h3>*/}
                    {/*    </div>*/}


                    {/*</div>*/}
                    {/*<div className="opportunity__row5">*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={novator} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Innovators")}</h3>*/}
                    {/*    </div>*/}
                    {/*    <div className="opportunity__box box">*/}
                    {/*        <div className="opportunity__img">*/}
                    {/*            <img src={sales} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="opportunity__h3">{t("opportunitySection.Retailers")}</h3>*/}
                    {/*    </div>*/}


                    {/*</div>*/}


                </div>

                {/*<div className="row__top row">*/}
                {/*    <div className="box ">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={buy} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Buyers")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__2">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={dis} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Distributors")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__1">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={img} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Government")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__2">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={science} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Scientific")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={devel} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Politicians")}</h3>*/}
                {/*    </div>*/}

                {/*</div>*/}
                {/*<div className="row__bot row">*/}
                {/*    <div className="box ">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={manu} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Consumers")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__1">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={lider} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Opinion")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__3">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={novator} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Innovators")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__4">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={sales} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Retailers")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box box__2">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={inv} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Innovators")}</h3>*/}
                {/*    </div>*/}
                {/*    <div className="box">*/}
                {/*        <div className="six">*/}
                {/*            <div className="six__img">*/}
                {/*                <img src={people} alt="box img"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <h3 className="six__h3">{t("opportunitySection.Consumers")}</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="six-blue">*/}
                {/*    <img src={six} alt="polygon"/>*/}
                {/*    <p className="six__title">{t("opportunitySection.title")}</p>*/}
                {/*</div>*/}

            </div>
        </section>
    );
};

export default OpportunitySection;