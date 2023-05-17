import React from 'react';
import RowQuestion from "../Question/RowQuestion/RowQuestion";
import "./expectPage.sass"
const ExpectPage = () => {
    return (
        <section className={'expectPage'}>
            <div className="expectPage__container container">
                <h2 className="expectPage__h2">Что вас ожидает</h2>
                <RowQuestion/>
            </div>
        </section>
    );
};

export default ExpectPage;