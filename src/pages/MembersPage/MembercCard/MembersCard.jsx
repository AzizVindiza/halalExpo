import React, {useContext, useState} from 'react';
import "./MembersCard.sass"
import MembersModal from "../MembersModal/MembersModal";
import {CustomContext} from "../../../Context";
import {Link, useNavigate} from "react-router-dom";

const MembersCard = ({obj}) => {
    const navigate = useNavigate()
    return (

        <>
            <Link to={`${obj.uniqueId}`} state={obj}>
                <section className="membersCard">
                    <div className="membersCard__container">
                        <div className="membersCard__first">
                            <div className="membersCard__img">
                                <img src={obj.image_logo} alt={obj.company_one}/>
                            </div>
                            <h2 className="membersCard__h2">{obj.company_one}</h2>
                        </div>
                        <div className="membersCard__second">
                            <h3 className="membersCard__h3">{obj.country}</h3>
                            <h4 className="membersCard__h4">{obj.direction || obj.other_trade}</h4>
                        </div>

                    </div>
                </section>
            </Link>
        </>


    );
};

export default MembersCard;