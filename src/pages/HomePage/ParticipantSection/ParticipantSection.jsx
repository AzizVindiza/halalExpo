import React from 'react';
import './ParticipantSection.sass'

const ParticipantSection = () => {
    return (
        <section className="participant">
            <h2 className="participant__h2">
                Участники
            </h2>
            <div className="participant__container container_fluid">
                <div className="participant__card"></div>
                <div className="participant__card"></div>
                <div className="participant__card"></div>
                <div className="participant__card"></div>
                <div className="participant__card"></div>
                <div className="participant__card"></div>
                <div className="participant__card"></div>
            </div>
        </section>
    );
};

export default ParticipantSection;