import React, {useContext} from 'react';
import './TaskSection.sass'
import svg from './task__svg.svg'
import TaskCard from "./TaskCard/TaskCard";
import {motion} from "framer-motion";
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";



const textMotion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.5}
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
            transition: {delay: custom * 0.5}
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
            transition: {delay: custom * 0.5}
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
            transition: {delay: custom * 0.5}
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
            transition: {delay: custom * 0.5}
        }
    )

}
const TaskSection = () => {
    const {t} = useTranslation()

    return (
        <motion.section
            transition={{ duration: 0.4 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true}}
            className="task">
            <div className="task__svg">
                <img src={svg} alt="dots"/>
            </div>
            <div className="container task__container">
                <div className="task__title">
                    <h2 className="task__h2">{t("taskSection.title")}</h2>
                </div>
                <div className="task__wrapper">
                            <motion.div  custom={1} variants={textMotion}>
                                <TaskCard number={1} text={t("taskSection.text1")}/>
                            </motion.div>

                    <motion.div  custom={2} variants={cartMotion}>
                        <TaskCard number={2} text={t("taskSection.text2")}/>
                    </motion.div>
                    <motion.div  custom={3} variants={cartMotion2}>
                        <TaskCard number={3} text={t("taskSection.text3")}/>
                    </motion.div>
                    <motion.div  custom={4} variants={cartMotion3}>
                        <TaskCard number={4} text={t("taskSection.text4")}/>
                    </motion.div>
                    <motion.div  custom={5} variants={cartMotion4}>
                        <TaskCard number={5} text={t("taskSection.text5")}/>
                    </motion.div>
                    <motion.div  custom={6} variants={cartMotion}>
                        <TaskCard number={6} text={t("taskSection.text6")}/>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default TaskSection;