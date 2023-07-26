import React, {useContext, useState} from 'react';
import "./MembersCard.sass"
import MembersModal from "../MembersModal/MembersModal";
import {CustomContext} from "../../../Context";
const MembersCard = ({obj}) => {
    const  {setOpenModal,openModal} = useContext(CustomContext)

    return (
        <>
            <section  onClick={() => setOpenModal(true)}  className="membersCard">
                <div className="membersCard__container">
                    <div className="membersCard__first">
                        <div className="membersCard__img">
                            <img src={obj.photo_company} alt={obj.company_one}/>
                        </div>
                        <h2 className="membersCard__h2">{obj.company_one}</h2>
                    </div>

                    <div className="membersCard__second">
                        <h3 className="membersCard__h3">{obj.country}</h3>
                        <h4 className="membersCard__h4">{obj.trade || obj.other_trade}</h4>
                    </div>

                </div>
            </section>
            {
                openModal ? <MembersModal/> : ""
            }
        </>


    );
};

export default MembersCard;