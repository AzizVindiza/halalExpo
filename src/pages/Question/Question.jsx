import React from 'react';
import "./question.sass"
import RowQuestion from "./RowQuestion/RowQuestion";
const Question = () => {
    return (
        <section className={'question'}>
            <div className="question__container container">
                <h2 className="question__h2">часто задаваемые вопросы</h2>
                <div className="question__wrapper">
                   <RowQuestion/>
                   <RowQuestion/>
                   <RowQuestion/>
                   <RowQuestion/>
                   <RowQuestion/>
                </div>
            </div>
        </section>
    );
};

export default Question;