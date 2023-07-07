import React, {useContext} from 'react';
import './FirstSection.sass'
import day from "./day.mp4"
import night from "./nigth.mp4"
import bg from './first__line.svg'
import bg339 from './first__line339.svg'
import small from './first__circle-small.svg'
import big from './first__circle-big.png'
import Btn from "../../../components/Btn/Btn";
import {motion} from "framer-motion"
import svg from './Vector 140.svg'
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";
import shater from './shater.svg'
import video from "../../../components/Registration/Loading/loading.mp4"


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

    const {setRequest, request} = useContext(CustomContext)
    const {t} = useTranslation()

    const data = new Date()
    const time = data.toLocaleTimeString()
    return (
        <motion.section initial={"hidden"} whileInView={"visible"} className="first">
            <div className="first__block-player">
                <video className={'first__player'} src={video}
                       autoPlay={true} muted={true} loop={true}/>
                <img className={"first__player2"} src={shater} alt=""/>

            </div>
            <motion.div custom={1} variants={textMotion} className="first__txt">
                <h3 className="first__h3">
                    ИННОВАЦИЯ НАЧИНАЮТСЯ ЗДЕСЬ!
                </h3>
                <h1 className="first__h2">
                    Halal Investment<br/>
                    and Trade<span>2023</span>
                </h1>
                <p className="first__p">{t("firstSection.text")}</p>
                <div onClick={() => setRequest(true)}  className="first__btn">
                    <Btn type="button" text="Забронировать стенд "/>
                </div>
                <div className="first__circle-small">
                    <img src={small} alt="small circle"/>
                </div>
            </motion.div>
            <div className="first__overlay">
                <img src={svg} alt=""/>
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