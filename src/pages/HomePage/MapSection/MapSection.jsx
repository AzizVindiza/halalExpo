import React from 'react';
import './MapSection.sass'
import Location from "./Location/Location";
import Btn from "../../../components/Btn/Btn";
import {motion} from "framer-motion";
import img from "./img.png"

const textMotion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        }
    )

}
const cartMotion = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        }
    )

}


const MapSection = () => {
    return (
        <motion.section  viewport={{once:true}} initial={"hidden"} whileInView={"visible"} className="map">

            <motion.div custom={1} variants={textMotion}>
                <h2 className="map__title container">Локации</h2>
            </motion.div>

            <div className="map__container container">
                <motion.div  custom={2} variants={textMotion} className="map__tabs">
                    <Location h2={"26.08.23 - 28.08.23 Культурный центр «Рух Ордо», г.Чолпон-Ата, Иссык-Кульская область, Кыргызская Республика"} p={ "Культурный центр \"Рух Ордо\" – это место, где сливаются традиция и современность. Его уникальная архитектура и теплая атмосфера создают особую энергетику, которая окутывает с первых шагов. `Рух Ордо` – это место, где каждая деталь имеет значение и каждый уголок приносит вам вдохновение и радость."}/>

                </motion.div>
                <motion.div custom={2} variants={cartMotion} className="map__wrapper">
                    {/*<div className="map__img">*/}
                    {/*    <img src={img} alt=""/>*/}
                    {/*</div>*/}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6298623364282!2d77.0929691154654!3d42.648006179168696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f13c35ead9dd%3A0x788e7fd907d170c8!2z0KDRg9GFINCe0YDQtNC-!5e0!3m2!1sru!2skg!4v1689075070223!5m2!1sru!2skg"
                         allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <a href="" className="map__a">
                        <Btn m={"big"} type="button" text="Подробнее"/>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MapSection;