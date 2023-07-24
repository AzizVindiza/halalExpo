import React, {useContext, useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./swiperFirst.sass"
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, EffectCreative, Navigation, Pagination} from "swiper";
import Btn from "../../../../../../components/Btn/Btn";
import FirstSelver from "./FirstSelver/FirstSelver";

import {CustomContext} from "../../../../../../Context";

const SwiperZone = ({img, img2, setClickTrades, prevRefTrades, nextRefTrades}) => {


    return (
        <div className={"mySwiper-first"}>
            <Swiper
                navigation={{
                    prevEl : prevRefTrades.current,
                    nextEl : nextRefTrades.current
                }}
                spaceBetween={30}
                pagination={true}
                modules={[EffectCreative, Navigation, Pagination, Autoplay]}
                className="mySwiper-first__box"
                onInit={() => setClickTrades(true)}
            >
                <SwiperSlide className={'mySwiper-first__block mySwiper-first__block_second'}>
                    <div className="mySwiper-first__slide">
                        <img src={img} className={'mySwiper-first__img'} alt="stand"/>
                    </div>

                    <FirstSelver price={"$1800"} title={'silver'} count={236} size={"2м x 2м"}/>
                </SwiperSlide>

                <SwiperSlide className={'mySwiper-first__block'}>
                    <div className="mySwiper-first__slide">
                        <img src={img2} className={'mySwiper-first__img'} alt="stand"/>
                    </div>
                    <FirstSelver btnColor={"#fff"} color={"#2E2E2E"}
                                 background={"linear-gradient(45deg, rgba(255, 199, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(199, 176, 130, 0.20) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FFDC79"}
                                 price={"$2400"} title={'cold'} count={60} size={"3м x 3м"}/>
                </SwiperSlide>

            </Swiper>
            <div className="componentZone__box">
                <div className="componentZone__content">
                    <div ref={prevRefTrades} className="componentZone__oval">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.5L2.49976 8.3753C2.20758 8.74052 2.20758 9.25948 2.49976 9.62469L8 16.5"
                                  stroke="#A1CB5C" strokeWidth="3" strokeLinecap="round"/>
                        </svg>

                    </div>
                    <div className="componentZone__block">
                        <button className="componentZone__click">
                            STANDART
                        </button>
                        <button className="componentZone__click">
                            SILVER
                        </button>
                        <button className="componentZone__click">
                            GOLD
                        </button>
                    </div>
                    <div ref={nextRefTrades} className="componentZone__oval">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L7.50024 8.3753C7.79242 8.74052 7.79242 9.25948 7.50024 9.62469L2 16.5"
                                  stroke="#A1CB5C" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <Btn text={'Забронировать'}/>
            </div>
        </div>
    );
}
export default SwiperZone