import React from 'react';
import "./b2bCard.sass"
import logo from "../img/logo.svg"
import B2bParticipant from "./B2bParticipant/B2bParticipant";
import B2bVisitor from "./B2bVisitor/B2bVisitor";



const B2BCard = () => {
    return (
        <div className="B2bCard">
            <div className="B2bCard__container">
                <div className="B2bCard__wrapper">
                    <div className="B2bCard__box">
                        <B2bParticipant/>
                        <B2bVisitor/>

                    </div>




                </div>
            </div>


        </div>
    );
};

export default B2BCard;