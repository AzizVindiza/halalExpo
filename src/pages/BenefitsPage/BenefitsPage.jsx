import React from 'react';
import './BenefitsPage.sass'
import CardMembers from "./CardMembers/CardMembers";

const BenefitsPage = () => {
    return (
        <section className="benefits">
            <div className="benefits__container container">
                <h2 className="benefits__h2">
                    Преимущества для участников
                </h2>
                <div className="benefits__wrapper">
                    <CardMembers/>
                    <CardMembers/>
                    <CardMembers/>
                    <CardMembers/>
                    <CardMembers/>

                </div>
            </div>
        </section>
    );
};

export default BenefitsPage;