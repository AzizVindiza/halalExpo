import React from 'react';
import "./SectorSection.sass"
import SectorCard from "./SectorCard/SectorCard";
import IMG from './testIMG.png'
import Icon from './testIcon.png'





const SectorSection = () => {
    return (
        <section className="sector">
            <div className="container sector__container">
                <h2 className="sector__h2">
                    Секторы
                </h2>
                <div className="sector__wrapper">

                    <SectorCard img={IMG} icon={Icon} title="Сектор Investment" text="Здесь вы сможете погрузиться в мир инновационных халяльных проектов. Площадка Investment возможность представить и рассмотреть интересные и перспективные халяльные идеи, открывая двери к новым возможностям в сфере инвестиций." link="#"/>
                    <SectorCard img={IMG} icon={Icon} title="Сектор Trade" text="В этой локации участники смогут продемонстрировать свои продукты, проекты и идеи на выставочных стендах. Сектор Trade является платформой для развития бизнеса, где вы сможете установить контакты, налаживать партнерства и открыть новые рынки для вашей халяльной продукции." link="#"/>
                    <SectorCard img={IMG} icon={Icon} title="Сектор Food" text="Погрузитесь в удивительный мир кулинарии народов Центральной Азии. В зоне Food вы сможете насладиться разнообразием аутентичных блюд, соответствующих требованиям Ислама. Это место, где можно отдохнуть, подкрепиться и познакомиться с культурой через гастрономический опыт." link="#"/>
                    <SectorCard img={IMG} icon={Icon} title="Сектор Fashion" text="Погружайтесь в мир моды, соответствующей принципам Ислама. В секторе Fashion будут представлены современные модели халяльной одежды для мужчин и женщин. Откройте для себя стильные и элегантные решения, сочетающие в себе соблюдение религиозных норм и индивидуальный стиль." link="#"/>
                </div>

            </div>
        </section>
    );
};

export default SectorSection;