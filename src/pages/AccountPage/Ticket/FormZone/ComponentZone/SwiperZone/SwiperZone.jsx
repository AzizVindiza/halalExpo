import React, {useContext, useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./swiperFirst.sass"


// import required modules
import {Pagination} from "swiper";
import Btn from "../../../../../../components/Btn/Btn";
import FirstSelver from "./FirstSelver/FirstSelver";

import {CustomContext} from "../../../../../../Context";

const SwiperZone = ({img,img2}) =>{


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
                        <img src={img} className={'mySwiper-first__img'} alt="stand"/>
                    </div>

                    <FirstSelver  price={"$1800"} title={'silver'} count={236} size={"2м x 2м"}/>
                </SwiperSlide>

                <SwiperSlide className={'mySwiper-first__block'}>
                    <div className="mySwiper-first__slide">
                        <img src={img2} className={'mySwiper-first__img'} alt="stand"/>
                    </div>
                    <FirstSelver btnColor={"#fff"} color={"#2E2E2E"}  background={"linear-gradient(45deg, rgba(255, 199, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(199, 176, 130, 0.20) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FFDC79"} price={"$2400"} title={'cold'} count={60} size={"3м x 3м"} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
export default SwiperZone