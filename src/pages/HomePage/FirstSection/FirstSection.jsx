import React from 'react';
import './FirstSection.sass'
import bg from './first__line.svg'
import small from './first__circle-small.png'
import big from './first__circle-big.png'
import Btn from "../../../components/Btn/Btn";
import { motion } from "framer-motion";
const transition = { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" };
const FirstSection = () => {
    return (
        <section className="first">
            <div className="container first__container">

                <div className="first__txt">
                    <h2 className="first__h2">
                        <span>2023</span><br/>
                        Halal Investment<br/>
                        and Trading
                    </h2>
                    <p className="first__p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/>
                        has been the industry's standard dummy text ever since the 1500s, when an unknown <br/>
                        printer took a galley of type and scrambled it to make a type specimen.
                    </p>
                    <a href="#" className="first__btn">
                        <Btn type="button" text="Оставить заявку"/>
                    </a>
                </div>
            </div>
            <div className="first__circle-big">
                <img src={big} alt="big circle"/>
            </div>
            <div className="box__wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
                    <motion.path
                        d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
                        fill="transparent"
                        strokeWidth="12"
                        stroke="rgba(255, 255, 0, 0)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={transition}
                    />
                </svg>
                <motion.div className="first__circle-small box" initial={{ offsetDistance: "0%", scale: 2.5 }} animate={{ offsetDistance: "100%", scale: 4.5 }} transition={transition}>
                    <img src={small} alt="small circle"/>
                </motion.div>
            </div>
            {/*<div className="first__circle-small">*/}
            {/*    <img src={small} alt="small circle"/>*/}
            {/*</div>*/}
            <div className="first__bg">
                <img src={bg} alt="line bg"/>
            </div>
        </section>
    );
};

export default FirstSection;