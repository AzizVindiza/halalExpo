import React from 'react';
import img from './FASHION ZONE.png'
import FashionSection from "./FashionSection/FashionSection";
import FashionCron from "./FashionCron/FashionCron";
import InvestBannerCard from "../InvestZonePage/InvestBanner/InvestBannerCard/InvestBannerCard";
import FashionBenefits from "./FashionBenefits/FashionBenefits";
import FashionLast from "./FashionLast/FashionLast";
const FashionZonePage = () => {
    return (
        <>
            <FashionSection/>
            <FashionCron/>
            <InvestBannerCard item={{p:"\nВ этом оазисе моды собраны лучшие модные бренды и дизайнеры, представляющие стильные продукты, соответствующие принципам халяль. Вы сможете быть в курсе последних тенденций моды, завязать ценные контакты с профессионалами индустрии и насладиться разнообразием модных предложений."}}/>
            <FashionBenefits/>
            <FashionLast/>
        </>
    );
};

export default FashionZonePage;