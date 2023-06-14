import React, {useContext, useState} from 'react';
import "./MembersCard.sass"
import pic from "../picture.png"
import MembersModal from "../MembersModal/MembersModal";
import {CustomContext} from "../../../Context";
const MembersCard = () => {
    const  {setOpenModal,openModal} = useContext(CustomContext)
    return (
        <>
            <section onClick={() => setOpenModal(true)}  className="membersCard">
                <div className="membersCard__wrapper">
                    <div className="membersCard__img">
                        <img src={pic} alt=""/>
                    </div>
                    <h2 className="membersCard__h2">Allchips Limited</h2>
                </div>
                <div className="membersCard__content">
                    <h3 className="membersCard__h3">Китай</h3>
                    <h4 className="membersCard__h3">Техника</h4>
                </div>
            </section>
            {
                openModal ? <MembersModal/> : ""
            }
        </>


    );
};

export default MembersCard;