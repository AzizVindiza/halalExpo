import React from 'react';
import PartnerSection from "./PartnerSection/PartnerSection";
import ApplicationSection from "./ApplicationSection/ApplicationSection";
import "./ApplicationSection/applicationSection.sass"
import PlusSection from "./PlusSection/PlusSection";
import PackagePage from "./PackagePage/PackagePage";

const PartnersPage = () => {
    return (
        <>
            <PartnerSection/>
            <ApplicationSection/>
            <PlusSection/>
            <PackagePage/>
        </>
    );
};

export default PartnersPage;