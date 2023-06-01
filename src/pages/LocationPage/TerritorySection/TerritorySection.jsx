import React, {useEffect, useRef, useState} from 'react';
import "./TerritorySection.sass"
import "swiper/css";
import "swiper/css/navigation";
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
            <div className="territory__container ">




                <div>
                    <Swiper navigation={
                        {
                            prevEl:prevRef.current,
                            nextEl:nextRef.current,
                        }
                    }
                            onInit={()=> setClickBtn(true)}
                            modules={[Navigation]} className="mySwiper"  >
                        <SwiperSlide>

                            <div className="territory__box">
                                <h2 className="territory__h2">
                                    Локация №1: Территория недействующего аэропорта, г. Чолпон-Ата
                                </h2>
                                <p  className="territory__p">
                                    На пространстве недействующего аэропорта, развернется главная сцена Halal Investment and Trade Expo 2023. Данная локация станет центром выставки, где будут представлены инвестиционные проекты, товары, услуги и проекты местных и зарубежных компаний.
                                </p>








                            </div>
                            <div className={"territory__img"}>
                                <img  src={img} alt=""/>
                            </div>


                            <div className="territory__square ">


                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="territory__box">
                                <h2 className="territory__h2">
                                    Локация №2: Государственная резиденция №2, г. Чолпон-Ата
                                </h2>
                                <p  className="territory__p">
                                    Это значимое место станет достойной площадкой для официальной церемонии открытия Halal Investment and Trade Expo 2023. Статус и изысканный интерьер государственной резиденции подчеркнут престиж и важность проводимого мероприятия.
                                </p>








                            </div>

                            <img src={img2} alt=""/>
                            <div className="territory__square">
                                dsd
                            </div>

                        </SwiperSlide>
                        <div className="territory__nav">
                            <button  ref={prevRef} className="territory__nav_after">
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 9C20.0523 9 20.5 8.55228 20.5 8C20.5 7.44772 20.0523 7 19.5 7V9ZM0.792894 7.29289C0.40237 7.68342 0.40237 8.31658 0.792894 8.70711L7.15686 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928933C8.18054 0.538408 7.54738 0.538408 7.15686 0.928933L0.792894 7.29289ZM19.5 7L1.5 7V9L19.5 9V7Z" fill="#70BE8B"/>
                                </svg>

                            </button>
                            <button  ref={nextRef} className="territory__nav_before">

                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 7.00006C0.947715 7.00006 0.5 7.44778 0.5 8.00006C0.5 8.55235 0.947715 9.00006 1.5 9.00006V7.00006ZM20.2071 8.70717C20.5976 8.31664 20.5976 7.68348 20.2071 7.29295L13.8431 0.928993C13.4526 0.538469 12.8195 0.538469 12.4289 0.928993C12.0384 1.31952 12.0384 1.95268 12.4289 2.34321L18.0858 8.00006L12.4289 13.6569C12.0384 14.0474 12.0384 14.6806 12.4289 15.0711C12.8195 15.4617 13.4526 15.4617 13.8431 15.0711L20.2071 8.70717ZM1.5 9.00006H19.5V7.00006H1.5V9.00006Z" fill="#70BE8B"/>
                                </svg>

                            </button>
                        </div>










                    </Swiper>


                </div>
            </div>

        </section>
    );
};

export default TerritorySection;