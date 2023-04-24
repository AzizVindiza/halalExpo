import React from 'react';
import "./TargetSection.sass"
import img from "./target__img.svg"
import bg from "./target__svg.svg"
const TargetSection = () => {
    return (
        <section className="target">
            <div className="target__container container">
                <div className="target__img">
                    <img src={img} alt="darts"/>
                </div>
                <div className="target__txt">
                    <h2 className="target__h2">
                        Цель
                    </h2>
                    <p className="target__p">
                        Развитие халал индустрии, <br/>
                        ведение бизнеса по исламским<br/>
                        принципам в странах СНГ и<br/>
                        улучшение взаимоотношений со<br/>
                        странами исламского мира.
                    </p>
                </div>
            </div>
            <div className="target__bg">
                <img src={bg} alt="lines"/>
            </div>

        </section>
    );
};

export default TargetSection;