import React from 'react';
import './investZonePage.sass'
import bg from "./img/bg.png"


import InvestSection from "./InvestSection/InvestSection";
import InvestCard from "./InvestCard/InvestCard";
import InvestBenefits from "./InvestBenefits/investBenefits";
import InvestBannerCard from "./InvestBanner/InvestBannerCard/InvestBannerCard";
import InvestLast from "./InvestLast/InvestLast";
import InvestBanner from "./InvestBanner/InvestBanner";

const InvestZonePage = () => {
    return (
        <div className={"investZonePage"}>
            <img className={"investZonePage__img"} src={bg} alt=""/>
            <InvestSection/>
            <InvestCard/>
            <InvestBenefits/>
            <InvestBanner/>
            <InvestLast/>

        </div>
    );
};

export default InvestZonePage;