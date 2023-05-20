import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import AboutSection from "./AboutSection/AboutSection";
import TargetSection from "./TargetSection/TargetSection";
import TaskSection from "./TaskSection/TaskSection";
import TypeSection from "./TypeSection/TypeSection";
import SectorSection from "./SectorSection/SectorSection";
import OpportunitySection from "./OpportunitySection/OpportunitySection";
import MapSection from "./MapSection/MapSection";
import SpeakersSection from "./SpeakersSection/SpeakersSection";

import ParticipantSection from "./ParticipantSection/ParticipantSection";
import OrganizatorSection from "./OrganizatorSection/OrganizatorSection";
import VideoSection from "./VideoSection/VideoSection";
import PartnersSection from "./PartnersSection/PartnersSection";
import OfficeMapSection from "./OfficeMapSection/OfficeMapSection";

const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <ParticipantSection/>
            <AboutSection/>
            <TargetSection/>
            <TaskSection/>
            <TypeSection/>
            <VideoSection/>
            <SectorSection/>
            <OpportunitySection/>
            <MapSection/>
            <SpeakersSection/>
            <OrganizatorSection/>
            <PartnersSection/>
            <OfficeMapSection/>
        </>
    );
};

export default HomePage;