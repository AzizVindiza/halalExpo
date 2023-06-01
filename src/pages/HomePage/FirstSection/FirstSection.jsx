import React from 'react';
import './FirstSection.sass'
import bg from './first__line.svg'
import bg339 from './first__line339.svg'
import small from './first__circle-small.svg'
import big from './first__circle-big.png'
import Btn from "../../../components/Btn/Btn";
import {motion} from  "framer-motion"
import CounterSection from "./CounterSection/CounterSection";
import SecondCounter from "./SecondCounter/SecondCounter";



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
    return (
        <motion.section initial={"hidden"} whileInView={"visible"} className="first">
            <div className="container first__container">

                <motion.div  custom={1} variants={textMotion} className="first__txt">
                    <h2 className="first__h2">
                        <span>2023</span><br/>
                        Halal Investment<br/>
                        and Trading
                    </h2>
                    <p className="first__p">
                        Добро пожаловать на Halal Investment and Trade Expo 2023 - одно из самых престижных событий в мире, посвященных халяльному инвестированию и торговле! Присоединяйтесь к нам, чтобы открыть новые возможности в глобальной халяльной экономике и укрепить связи в сообществе международных предпринимателей и инвесторов.
                    </p>
                    <a href="#" className="first__btn">
                        <Btn type="button" text="Оставить заявку"/>
                    </a>
                </motion.div>
                <div className="first__component">
                    <CounterSection/>
                    <SecondCounter/>
                </div>

            </div>
            <div className="first__circle-big">
                <img src={big} alt="big circle"/>
            </div>

            <div className="first__circle-small">
                <img src={small} alt="small circle"/>
            </div>
            <div className="first__bg">
                <picture>
                    <source media="(max-width:394px)" srcSet={bg339}/>
                    <img src={bg} alt="line bg"/>
                </picture>
            </div>

        </motion.section>
    );
};

export default FirstSection;