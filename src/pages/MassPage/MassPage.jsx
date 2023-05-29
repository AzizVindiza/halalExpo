import React from 'react';
import "./MassPage.sass"
import MassSection from "./MassSection/MassSection";
import TextSection from "./TextSection/TextSection";
import TxtSection from "./TxtSection/TxtSection";

const MassPage = () => {
    return (
        <section className="mass">
            <div className="mass__content">
                <h2 className="mass__title">СМИ</h2>
            </div>
            <div className="container mass__container">
                <MassSection/>
                <TextSection/>
                <div className="txt__h3"><TxtSection/></div>
            </div>

        </section>
    );
};

export default MassPage;