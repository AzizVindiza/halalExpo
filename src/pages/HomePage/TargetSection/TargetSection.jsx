import React from 'react';
import "./TargetSection.sass"
import img from './img.svg'
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
                        Содействие развитию экономики стран Центральной Азии, становлению
                        халяль-индустрии в странах региона
                        и помощь предпринимателям в презентации и реализации своих
                        бизнес-проектов по исламски принципам.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default TargetSection;