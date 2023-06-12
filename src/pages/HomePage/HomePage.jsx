import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import AboutSection from "./AboutSection/AboutSection";
import TargetSection from "./TargetSection/TargetSection";
import TaskSection from "./TaskSection/TaskSection";
import TypeSection from "./TypeSection/TypeSection";

import OpportunitySection from "./OpportunitySection/OpportunitySection";
import MapSection from "./MapSection/MapSection";
import SpeakersSection from "./SpeakersSection/SpeakersSection";
import ParticipantSection from "./ParticipantSection/ParticipantSection";
import OrganizatorSection from "./OrganizatorSection/OrganizatorSection";
import VideoSection from "./VideoSection/VideoSection";
import PartnersSection from "./PartnersSection/PartnersSection";
import OfficeMapSection from "./OfficeMapSection/OfficeMapSection";
import StartSection from "./StartSection/StartSection";
import ZoneSection from "./ZoneSection/ZoneSection";
import DateSection from "./DateSection/DateSection";

const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <DateSection/>
            <ParticipantSection/>
            <div className="home__bg">
                <AboutSection/>
                <TargetSection/>
            </div>
            <TaskSection/>
            <TypeSection/>
            <VideoSection/>
            <StartSection/>
            <ZoneSection/>
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