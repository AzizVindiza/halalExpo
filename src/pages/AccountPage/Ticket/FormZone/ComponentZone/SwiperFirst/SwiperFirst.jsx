import React, {useContext, useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import first from "./first.png"
import second from "./second.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./swiperFirst.sass"


// import required modules
import {Pagination} from "swiper";
import Btn from "../../../../../../components/Btn/Btn";
import FirstSelver from "./FirstSelver";
import SecondSelver from "./SecondSelver";
import {CustomContext} from "../../../../../../Context";

export default function App() {


    return (
        <div className={"mySwiper-first"}>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper-first__box"
            >
                <SwiperSlide className={'mySwiper-first__block mySwiper-first__block_second'}>
                    <div className="mySwiper-first__slide">
                        <img src={first} className={'mySwiper-first__img'} alt="stand"/>
                    </div>

                    <FirstSelver/>
                </SwiperSlide>

                <SwiperSlide className={'mySwiper-first__block'}>
                    <div className="mySwiper-first__slide">
                        <img src={second} className={'mySwiper-first__img'} alt="stand"/>
                    </div>
                    <SecondSelver/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
