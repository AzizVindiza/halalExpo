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
                    <SectorCard img={IMG} icon={Icon} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="#"/>
                    <SectorCard img={IMG} icon={Icon} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="#"/>
                    <SectorCard img={IMG} icon={Icon} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="#"/>
                    <SectorCard img={IMG} icon={Icon} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="#"/>
                </div>

            </div>
        </section>
    );
};

export default SectorSection;