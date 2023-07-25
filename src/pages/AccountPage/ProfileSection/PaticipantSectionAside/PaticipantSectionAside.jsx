import React from 'react';
import Profile from "./Profile/Profile";
import DataBoss from "./DataBoss/DataBoss";
import DataCompany from "./DataCompany/DataCompany";
import Certification from "./Certification/Certification";
import {useSelector} from "react-redux";

const ParticipantSectionAside = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <div>
            <Profile/>
            <DataBoss/>
            <DataCompany/>
            <Certification title={user.inn} title2={user.orgn} title3={user.okpo}/>
            <Certification title={user.name_bank} title2={user.p_c} title3={user.bik}/>
        </div>
    );
};

export default ParticipantSectionAside;