import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative, Navigation, Pagination} from "swiper";
import FirstSelver from "../../SwiperZone/FirstSelver/FirstSelver";
import Btn from "../../../../../../../components/Btn/Btn";


const SwiperFashion = ({fashion,setClickFashions,prevRefFashions,nextRefFashions}) => {
    return (
        <div>
            <div className={"mySwiper-first"}>
                <Swiper
                    navigation={{
                        prevEl : prevRefFashions.current,
                        nextEl : nextRefFashions.current
                    }}
                    spaceBetween={30}
                    modules={[EffectCreative, Navigation, Pagination, Autoplay]}
                    className="mySwiper-first__box"
                    onInit={() => setClickFashions(true)}
                >
                    <SwiperSlide className={'mySwiper-first__block mySwiper-first__block_second'}>
                        <div className="mySwiper-first__slide">
                            <img src={fashion} className={'mySwiper-first__img'} alt="stand"/>
                        </div>
                        <FirstSelver background={"linear-gradient(45deg, rgba(16, 146, 62, 0.12) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(16, 146, 62, 0.12) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #40A865"} price={"$1100"} title={'КРОНШТЕЙНЫ'} count={20} size={"2м x 2м"}/>
                    </SwiperSlide>
                </Swiper>
                <div className="componentZone__box">
                    <div className="componentZone__content">
                        <div ref={prevRefFashions}  className="componentZone__oval">
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1.5L2.49976 8.3753C2.20758 8.74052 2.20758 9.25948 2.49976 9.62469L8 16.5" stroke="#A1CB5C" strokeWidth="3" strokeLinecap="round"/>
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
                        <div  ref={nextRefFashions} className="componentZone__oval">
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 1.5L7.50024 8.3753C7.79242 8.74052 7.79242 9.25948 7.50024 9.62469L2 16.5"
                                      stroke="#A1CB5C" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <Btn text={'Забронировать'}/>
                </div>
            </div>
        </div>
    );
};

export default SwiperFashion;