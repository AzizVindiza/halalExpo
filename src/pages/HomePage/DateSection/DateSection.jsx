import React from 'react';
import CounterSection from "../FirstSection/CounterSection/CounterSection";
import SecondCounter from "../FirstSection/SecondCounter/SecondCounter";
import "./date.sass"
const DateSection = () => {
    return (
        <div className={'date'}>
            <div className="date__container container">
                <CounterSection/>
                <SecondCounter/>
            </div>

        </div>
    );
};

export default DateSection;