import React from 'react';
import Profile from "./Profile/Profile";
import DataBoss from "./DataBoss/DataBoss";
import "./profileSection.sass"
import DataCompany from "./DataCompany/DataCompany";
import Certification from "./Certification/Certification";
const ProfileSection = () => {
    return (
        <div className={'profileSection '}>
            <div className="profileSection__container">
                <Profile/>
                <DataBoss/>
                <DataCompany/>
                <Certification/>
                <Certification />
            </div>
        </div>
    );
};

export default ProfileSection;