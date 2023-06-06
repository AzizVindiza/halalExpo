import React from 'react';
import RowQuestion from "../Question/RowQuestion/RowQuestion";
import "./expectPage.sass"
const ExpectPage = () => {
    return (
        <section className={'expectPage'}>
            <div className="expectPage__container container">
                <div className="expectPage__wrapper">
                    <h2 className="expectPage__h2">Что вас ожидает</h2>
                    <p className="expectPage__p">На выставке Halal Investment and Trade Expo 2023 посетители получат следующие преимущества и возможности</p>
                </div>
                <RowQuestion/>
            </div>
        </section>
    );
};

export default ExpectPage;