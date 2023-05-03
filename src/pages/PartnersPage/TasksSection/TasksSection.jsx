import React from 'react';
import logo from "../PartnerSection/logo.png";

const TasksSection = () => {
    return (
        <section className={'tasksSection'}>
            <div className="container tasksSection__container">
                <div className="partnerSection__inner">
                    <h2 className="partnerSection__h2">Партнеры <span className={'partnerSection__span'}>HIT EXPO</span></h2>
                    <p className="partnerSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply </p>
                </div>
                <div className="partnerSection__pic">
                    <img src={logo} className={'partnerSection__image'} alt=""/>
                </div>
            </div>
            <div className="partnerSection__wrapper">
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
                <div className="partnerSection__block"></div>
            </div>
        </section>
    );
};

export default TasksSection;