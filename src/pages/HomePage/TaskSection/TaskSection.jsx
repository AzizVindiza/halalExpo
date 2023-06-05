import React from 'react';
import './TaskSection.sass'
import svg from './task__svg.svg'
import TaskCard from "./TaskCard/TaskCard";
import {motion} from "framer-motion";



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

const cartMotion = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.8}
        }
    )

}
const cartMotion2 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 1.2}
        }
    )

}
const cartMotion3 = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 1}
        }
    )

}
const cartMotion4 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 1}
        }
    )

}
const TaskSection = () => {
    return (
        <motion.section
            transition={{ duration: 0.4 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            initial={"hidden"}
            whileInView={"visible"}
            className="task">
            <div className="task__svg">
                <img src={svg} alt="dots"/>
            </div>
            <div className="container task__container">
                <div className="task__title">
                    <h2 className="task__h2">Основные задачи проведения Halal Investment <br/>and Trade Expo 2023</h2>
                </div>
                <div className="task__wrapper">
                    <motion.div  custom={1} variants={textMotion}>
                        <TaskCard number={1} text="Представление и продвижение Halal-продуктов и услуг на мировом рынке, способствование укреплению их позиций на международной арене."/>
                    </motion.div>
                    <motion.div  custom={1} variants={cartMotion}>
                        <TaskCard number={2} text="Содействие в реализации и развитии халал бизнес проектов и Халал продукт в странах СНГ."/>
                    </motion.div>
                    <motion.div  custom={1} variants={cartMotion2}>
                        <TaskCard number={3} text="Раскрыть новые рынки для иностранных партнеров и инвесторов, заинтересованных в торговле и инвестировании в халяльные продукты и услуги в Кыргызстане и других странах Центральной Азии."/>
                    </motion.div>
                    <motion.div  custom={1} variants={cartMotion3}>
                        <TaskCard number={4} text="Распространить высокие стандарты качества и сертификации халяль-продуктов и услуг для повышения доверия со стороны покупателей и инвесторов."/>
                    </motion.div>
                    <motion.div  custom={1} variants={cartMotion4}>
                        <TaskCard number={5} text="Повысить информированность гостей мероприятия и общественности об инвестиционных и торговых возможностях в халяль-индустрии, а также обеспечить информационную поддержку новым тенденциям и разработкам в этой отрасли через проведение ежегодного масштабного мероприятия HIT Expo."/>
                    </motion.div>
                    <motion.div  custom={1} variants={cartMotion4}>
                        <TaskCard number={6} text="Содействие в укреплении международных отношений, предоставление площадки для обмена опытом и знаниями между участниками, развитие бизнес-связей и партнерств между производителями и покупателями из разных стран и регионов."/>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default TaskSection;