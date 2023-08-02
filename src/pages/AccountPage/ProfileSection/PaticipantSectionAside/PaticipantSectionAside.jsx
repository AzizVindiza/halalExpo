import React from 'react';
import Profile from "./Profile/Profile";
import DataBoss from "./DataBoss/DataBoss";
import DataCompany from "./DataCompany/DataCompany";
import Certification from "./Certification/Certification";
import {useSelector} from "react-redux";
import BankProfile from "./BankProfile/BankProfile";

const ParticipantSectionAside = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <div>
            <Profile/>
            <DataBoss/>
            <DataCompany/>
            <Certification/>
            <BankProfile/>
        </div>
    );
};

export default ParticipantSectionAside;