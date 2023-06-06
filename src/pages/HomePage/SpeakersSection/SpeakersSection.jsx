import React from 'react';
import './SpeakersSection.sass'
import SpeakerCard from "./SpeakerCard/SpeakerCard";
import Btn from "../../../components/Btn/Btn";
const SpeakersSection = () => {
    return (
        <section className="speaker">
            <div className="speaker__container container">
                <h2 className="speaker__h2">Спикеры</h2>
                <div className="speaker__wrapper">
                    <SpeakerCard/>
                    <SpeakerCard/>
                    <SpeakerCard/>
                    <SpeakerCard/>
                    <SpeakerCard/>
                    <SpeakerCard/>
                </div>
                <div className="speaker__btn">
                    <Btn text={'Все спикеры'}/>
                </div>

            </div>
        </section>
    );
};

export default SpeakersSection;