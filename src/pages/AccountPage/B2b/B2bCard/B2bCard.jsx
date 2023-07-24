import React from 'react';
import "./b2bCard.sass"
import logo from "../img/logo.svg"
import B2bParticipant from "./B2bParticipant/B2bParticipant";



const B2BCard = () => {
    return (
        <div className="B2bCard">
            <div className="B2bCard__container">
                <div className="B2bCard__wrapper">
                    <div className="B2bCard__row">
                        <div className="B2bCard__status">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.25 7.5L8.25 10.5L6.75 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="B2bCard__span">
                                Активно
                            </div>
                        </div>
                        <div className="B2bCard__date">
                            27 августа 12:02
                        </div>
                    </div>
                    <div className="B2bCard__box">
                        <B2bParticipant/>



                    </div>




                </div>
            </div>


        </div>
    );
};

export default B2BCard;