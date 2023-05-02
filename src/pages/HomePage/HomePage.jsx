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
const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <AboutSection/>
            <TargetSection/>
            <TaskSection/>
            <TypeSection/>
            <SectorSection/>
            <OpportunitySection/>
            <MapSection/>
            <SpeakersSection/>
        </>
    );
};

export default HomePage;