import React from 'react';
import AssociationSection from "./AssociationSection/AssociationSection";
import TableSection from "./TableSection.jsx/TableSection";
import OrganizatorSection from "./OrganizatorSection/OrganizatorSection";

const OrganizationPage = () => {
    return (
        <>
            <AssociationSection/>
            <TableSection/>
            <OrganizatorSection/>

        </>
    );
};

export default OrganizationPage;