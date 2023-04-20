import React from 'react';
import './AboutSection.sass'
import svg from './about__svg.svg'
const AboutSection = () => {
    return (
        <section className="about">
            <div className="container_fluid about__container">
                <h3 className="about__h3">О форуме</h3>
                <h2 className="about__h2">
                    Halal Investment and Trading 2023
                </h2>
                <p className="about__p">
                    Halal Investment and Trade Expo 2023 – крупнейшая выставка халяльных инвестиционных и инфраструктурных проектов в Кыргызстане, проводимая в рамках развития международных торговых отношений и экспорта. Мероприятие объединяет профессионалов из разных секторов, демонстрирует последние тенденции и инновации, а также предоставляет платформу для взаимодействия экспонентов и посетителей. Выставка включает семинары, встречи и культурные мероприятия, а также специальный раздел для продуктов халяль-индустрии.
                    <br/>
                    <br/>
                    В будущем мы стремимся сделать Halal Investment and Trade Expo крупнейшей халяльной платформой в Центральной Азии и СНГ, и установить стабильные отношения со странами исламского мира.
                </p>
                <div className="about__svg">
                    <img src={svg} alt="circle about"/>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;