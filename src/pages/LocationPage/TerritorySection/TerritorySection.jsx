import React, {useEffect, useRef, useState} from 'react';
import "./TerritorySection.sass"
import "swiper/css";
import "swiper/css/navigation";
import bg from "./bg.png"
import bg2 from "./bg2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import img from './location.png'
import img2  from './location2.png'
import { useSwiper } from 'swiper/react';




import { Navigation } from "swiper";

const TerritorySection = () => {
    const [_,setClickBtn] = useState()
    const swiper =useSwiper()

    const prevRef = useRef(null)
    const nextRef = useRef(null)



        return (
        <section className={'territory'}>
            <div className="territory__container">




                <div className={"territory__wrapper"}>


                            <div className="territory__box">
                                <h2 className="territory__h2">
                                    Локация HIT Expo 2023
                                </h2>
                                <div className="territory__row">
                                    <p  className="territory__p"><span className={"territory__span"}>Озеро Иссык-Куль</span> – это райский уголок для глаз и души. Его чистые воды и окружающая горная красота создают захватывающую картину, которую невозможно описать словами. Раскройте глаза и сердце – Иссык-Куль вам дарит неповторимые моменты и вдохновение.

                                    </p>
                                    <p  className="territory__p"><span className={"territory__span"}>А культурный центр "Рух Ордо"</span>  – это место, где сливаются традиция и современность. Его уникальная архитектура и теплая атмосфера создают особую энергетику, которая окутывает с первых шагов. "Рух Ордо" – это место, где каждая деталь имеет значение и каждый уголок приносит вам вдохновение и радость.
                                    </p>
                                    <p className={"territory__p"}>
                                        Приготовьтесь к встречам с новыми людьми, к увлекательным разговорам и к новым открытиям. Вас ждут моменты, которые запомнятся навсегда!

                                    </p>
                                    <p className={"territory__p"}>Не упустите возможность погрузиться в красоту природы и культурного обмена на выставке Halal Investment and Trade Expo 2023. Станьте частью этого уникального события!
                                    </p>
                                </div>









                            </div>
                            <div className={"territory__img"}>
                                <img className={"territory__img1"} src={bg} alt=""/>
                                <img className={"territory__img2"} src={bg2} alt=""/>
                            </div>
                    <div className="territory__maps">
                        <div className="territory__map container">
                            <h3 className={"territory__h3"}>Как добраться?</h3>
                            <span className="territory__span2">
                                    Культурный центр «Рух Ордо», г. Чолпон-Ата, Иссык-Кульская область
                                </span>




                        </div>
                        <div className="territory__iframe">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.1337121784723!2d77.09300377127472!3d42.64880369381159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f13c35ead9dd%3A0x788e7fd907d170c8!2z0KDRg9GFINCe0YDQtNC-!5e0!3m2!1sru!2skg!4v1688971306673!5m2!1sru!2skg"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>




                        {/*<div className="territory__nav">*/}
                        {/*    <button  ref={prevRef} className="territory__nav_after">*/}
                        {/*        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M19.5 9C20.0523 9 20.5 8.55228 20.5 8C20.5 7.44772 20.0523 7 19.5 7V9ZM0.792894 7.29289C0.40237 7.68342 0.40237 8.31658 0.792894 8.70711L7.15686 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928933C8.18054 0.538408 7.54738 0.538408 7.15686 0.928933L0.792894 7.29289ZM19.5 7L1.5 7V9L19.5 9V7Z" fill="#70BE8B"/>*/}
                        {/*        </svg>*/}

                        {/*    </button>*/}
                        {/*    <button  ref={nextRef} className="territory__nav_before">*/}

                        {/*        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M1.5 7.00006C0.947715 7.00006 0.5 7.44778 0.5 8.00006C0.5 8.55235 0.947715 9.00006 1.5 9.00006V7.00006ZM20.2071 8.70717C20.5976 8.31664 20.5976 7.68348 20.2071 7.29295L13.8431 0.928993C13.4526 0.538469 12.8195 0.538469 12.4289 0.928993C12.0384 1.31952 12.0384 1.95268 12.4289 2.34321L18.0858 8.00006L12.4289 13.6569C12.0384 14.0474 12.0384 14.6806 12.4289 15.0711C12.8195 15.4617 13.4526 15.4617 13.8431 15.0711L20.2071 8.70717ZM1.5 9.00006H19.5V7.00006H1.5V9.00006Z" fill="#70BE8B"/>*/}
                        {/*        </svg>*/}

                        {/*    </button>*/}
                        {/*</div>*/}













                </div>
            </div>

        </section>
    );
};

export default TerritorySection;