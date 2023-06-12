import React from 'react';
import './FirstSection.sass'
import day from "./day.mp4"
import night from "./nigth.mp4"
import bg from './first__line.svg'
import bg339 from './first__line339.svg'
import small from './first__circle-small.svg'
import big from './first__circle-big.png'
import Btn from "../../../components/Btn/Btn";
import {motion} from  "framer-motion"
import CounterSection from "./CounterSection/CounterSection";
import SecondCounter from "./SecondCounter/SecondCounter";
import ReactPlayer from "react-player";



const textMotion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }
    )

}

const FirstSection = () => {
    const  data = new Date()
    const  time = data.toLocaleTimeString()
    return (
        <motion.section initial={"hidden"} whileInView={"visible"} className="first">
            <div className="first__block-player">

                 <video className={'first__player'} src={time.slice(0,2) > 5 && time.slice(0,2) < 17 ? day : night} autoPlay={true} muted={true} loop={true}/>
                <motion.div  custom={1} variants={textMotion} className="first__txt">
                    <h3 className="first__h3">
                        ИННОВАЦИЯ НАЧИНАЮТСЯ ЗДЕСЬ
                    </h3>
                    <h1 className="first__h2">
                        Halal Investment<br/>
                        and Trade<span>2023</span>
                    </h1>
                    <p className="first__p">
                        Добро пожаловать на Halal Investment and Trade Expo 2023 - одно из самых престижных событий в мире, посвященных халяльному инвестированию и торговле! Присоединяйтесь к нам, чтобы открыть новые возможности в глобальной халяльной экономике и укрепить связи в сообществе международных предпринимателей и инвесторов.
                    </p>
                    <a href="#" className="first__btn">
                        <Btn type="button" text="Оставить заявку"/>
                    </a>
                    <div className="first__circle-small">
                        <img src={small} alt="small circle"/>
                    </div>
                </motion.div>
            </div>





        </motion.section>
    );

};

export default FirstSection;