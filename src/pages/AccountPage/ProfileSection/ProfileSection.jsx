import React from 'react';

import "./profileSection.sass"
import ParticipantSectionAside from "./PaticipantSectionAside/PaticipantSectionAside";
import {useSelector} from "react-redux";
import store from "../../../redux/store";
import VisitorSectionAside from "./VisitorSectionAside/VisitorSectionAside";

const ProfileSection = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <div className={'profileSection '}>
            <div className="profileSection__container">
                {
                    user.type_register === "Участник" ?
                        <ParticipantSectionAside/> : ""
                }
                {   user.type_register === "Посетитель" ?
                    <VisitorSectionAside/> : ""
                }

            </div>
        </div>
    );
};

export default ProfileSection;