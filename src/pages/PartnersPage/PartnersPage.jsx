import React from 'react';
import PartnerSection from "./PartnerSection/PartnerSection";
import ApplicationSection from "./ApplicationSection/ApplicationSection";

import PlusSection from "./PlusSection/PlusSection";
import PartnersSection from "../HomePage/PartnersSection/PartnersSection";
import PartnersOfficial from "../HomePage/PartnersOfficial/PartnersOfficial";
import PartnersInfo from "../HomePage/PartnersInfo/ParnersInfo";


const PartnersPage = () => {
    return (
        <>
            <PartnerSection/>
            <PartnersSection/>
            <PartnersOfficial/>
            <PartnersInfo/>
            <ApplicationSection/>
            <PlusSection/>

        </>
    );
};

export default PartnersPage;