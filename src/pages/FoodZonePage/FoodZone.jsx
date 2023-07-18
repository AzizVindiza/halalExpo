import React from 'react';
import FoodZoneSection from "./FoodZoneSection/FoodZoneSection";
import FoodCard from "./FoodCard/FoodCard";
import AdvantagesSection from "./AdvantagesSection/AdvantagesSection";
import RequirementSection from "./RequirementSection/RequirementSection";

const FoodZone = () => {
    return (
        <>
            <FoodZoneSection/>
            <FoodCard/>
            <AdvantagesSection/>
            <RequirementSection/>
            
        </>
    );
};

export default FoodZone;
