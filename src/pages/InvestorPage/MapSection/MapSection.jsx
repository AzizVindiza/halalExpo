import React from 'react';
import pic from "./карта3 1.png"
import "./mapsection.sass"
import kz from "./kz.svg"
import kg from "./kg.svg"
import ru from "./ru.svg"
import uz from "./uz.svg"
import vel from "./Un.svg"
import ku from "./kuveit.svg"
import tu from "./turk.svg"
import saud from "./saud.svg"
import bah from "./bahr.svg"
import katar from "./katar.svg"
import egipet from "./egipet.svg"
import oa from "./Oae.svg"
import InvestorPeople from "../InvestorPeople/InvestorPeople";




const MapSection = () => {
    return (
        <section className={'mapSection'}>
            <div className="container mapSection__container">
                <h2 className="mapSection__h2">инвесторы hit expo 2023</h2>

                <div className="mapSection__block">
                    <div className="mapSection__row">
                        <div className="mapSection__item">
                            <div className="mapSection__img">
                                <img src={uz} alt=""/>
                            </div>
                            <h3 className={"mapSection__h3"}>Узбекистан</h3>
                        </div>
                        <div className="mapSection__item">
                            <div className="mapSection__img">
                                <img src={ru} alt=""/>
                            </div>
                            <h3 className={"mapSection__h3"}>Россия</h3>
                        </div>
                        <div className="mapSection__item">
                            <div className="mapSection__img">
                                <img src={kg} alt=""/>
                            </div>
                            <h3 className={"mapSection__h3"}>Кыргызстан</h3>
                        </div>
                        <div className="mapSection__item">
                            <div className="mapSection__img">
                                <img src={kz} alt=""/>
                            </div>
                            <h3 className={"mapSection__h3"}>Казахстан</h3>
                        </div>
                    </div>
                    <div className="mapSection__row2">
                        <div className="mapSection__column">
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={vel} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Великобритания</h3>
                            </div>
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={tu} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Турция</h3>
                            </div>
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={ku} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Кувейт</h3>
                            </div>
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={saud} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Королевста <br/> Саудовской Аравии </h3>
                            </div>
                        </div>
                        <div className="mapSection__column  ">
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={bah} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Бахрейн</h3>
                            </div>
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={katar} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Катар</h3>
                            </div>
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={egipet} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>Египет</h3>
                            </div>
                            <div className="mapSection__item">
                                <div className="mapSection__img">
                                    <img src={oa} alt=""/>
                                </div>
                                <h3 className={"mapSection__h3"}>ОАЭ</h3>
                            </div>
                        </div>
                    </div>
                    <img src={pic} alt="" className="mapSection__img2"/>


                        {/*<img src={pic} alt="" className="mapSection__img"/>*/}

                </div>
                <InvestorPeople/>


                <div className={"mapSection__box"}>
                    <p className="mapSection__p">Выставка <span className={"mapSection__span"}> Halal Investment and Trade Expo 2023</span> соберет представителей инвестиционных фондов из стран арабского мира. Специалисты, топ-менеджеры и главы крупнейших компаний мира прибудут на мероприятие для поиска и отбора перспективных проектов из различных областей деятельности.</p>
                    <p className="mapSection__p">Присутствие представителей инвестиционных фондов из арабских стран подчеркивает важность проведения <span className={"mapSection__span"}>HIT Expo-2023</span>, так как мероприятия окажет содействие в развитии экономического сотрудничества и укреплении связей на международном уровне. Также их участие является выражением намерения исследовать новые возможности, придерживаясь исламских ценностей. </p>
                    <p className="mapSection__p">Выставка  <span className={"mapSection__span"}> Halal Investment andTrade Expo 2023</span> нацелена на то, чтобы стать катализатором экономического роста и развития, создавая благоприятные условия и возможности для бизнеса и инвесторов.</p>
                </div>

            </div>
        </section>
    );
};

export default MapSection;