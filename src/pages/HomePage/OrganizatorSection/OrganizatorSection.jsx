import React from 'react';
import adm from './image/ADM.svg'
import dfca from './image/DFCA.svg'
import ibic from './image/IBIC.svg'
import rebub from './image/Rebub.svg'
import skyland from './image/skyland.svg'
import smart from './image/smart.svg'
import avangard from './image/avangard.svg'
import ameca from "./image/ameca.svg"
import trade from "./image/trade.svg"
import city from "./image/city.svg"
import "./OrganizatorSection.sass"



import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Autoplay, FreeMode, Grid, Pagination} from "swiper";
import SupportAdaptive from "./SupportAdaptive/supportAdaptive";




const OrganizatorSection = () => {
    return (
        <section className={'organizatorSection'}>
            <div className="container organizatorSection__container">
                <h2 className="organizatorSection__h2">Организаторы</h2>
                <div className={'organizatorSection__img '}>
                    <img className={"ameca"} src={ameca} alt=""/>
                </div>
                <div className="organizatorSection__line"></div>
                <h3 className="organizatorSection__h3">ПРИ ПОДДЕРЖКЕ </h3>
                <SupportAdaptive/>

            </div>
            <Swiper
                slidesPerView={4}
                breakpoints={{
                    1025:{

                        slidesPerView:4
                    },
                    770:{

                        slidesPerView:3

                    }
                }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                speed={4000}
                grabCursor={true}
                loop={true}
                freeMode={true}

                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>  <div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={rebub} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                Правительство <br/>
                                Кыргызской Республики
                            </span>
                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={ibic} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                Корпорация IBIC
                            </span>

                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={trade} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                Торгово-промышленная палата Кыргызской Республики
                            </span>

                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={skyland} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                SKYLAND
                            </span>

                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={adm} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                ADM GROUP
                            </span>

                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={avangard} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                               ODADMIRAL
                            </span>

                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={city} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                CITY312
                            </span>

                </div></SwiperSlide>
                <SwiperSlide><div className="organizatorSection__box">
                    <div className="organizatorSection__img">
                        <img src={smart} alt=""/>
                    </div>
                    <span className="organizatorSection__span">
                                ITC SMART
                            </span>

                </div></SwiperSlide>

            </Swiper>


        </section>
    );
};

export default OrganizatorSection;