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
                    <div className="membersCard__close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9H9M9 9H17M9 9V17M9 9V1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
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