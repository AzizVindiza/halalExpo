import React from 'react';

import "./profileSection.sass"
import ParticipantSectionAside from "./PaticipantSectionAside/PaticipantSectionAside";
import {useSelector} from "react-redux";
import store from "../../../redux/store";

const ProfileSection = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <div className={'profileSection '}>
            <div className="profileSection__container">
                {
                    user.type_register === "Участник" ?
                        <ParticipantSectionAside/> : ""
                }

            </div>
        </div>
    );
};

export default ProfileSection;