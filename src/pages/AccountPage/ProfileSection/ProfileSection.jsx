import React from 'react';

import "./profileSection.sass"
import ParticipantSectionAside from "./PaticipantSectionAside/PaticipantSectionAside";
import {useSelector} from "react-redux";
import store from "../../../redux/store";
import VisitorSectionAside from "./VisitorSectionAside/VisitorSectionAside";
import GovernmentSectionAside from "./GovernmentSectionAside/GovernmentSectionAside";

const ProfileSection = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <div className={'profileSection '}>
            <div className="profileSection__container">
                {
                    user.user_type === 5 ?
                        <ParticipantSectionAside/> :  
                    user.user_type === 2 ?
                    <VisitorSectionAside/> :
                        user.user_type === 4 ?
                            <GovernmentSectionAside/> : ""
                }



            </div>
        </div>
    );
};

export default ProfileSection;