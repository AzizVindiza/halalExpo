import React from 'react';
import InvestSection from "./InvestSection/InvestSection";
import './investPage.sass'
import invest from './invest.svg'
import InvestAdvantagesSection from "./InvestAdvantages/InvestAdvantagesSection";

const InvestPage = () => {
    return (
        <section className={"investPage"}>
            <div className="investPage__img">
                <img src={invest} alt=""/>
            </div>
            <InvestSection/>
            <InvestAdvantagesSection/>

        </section>
    );
};

export default InvestPage;