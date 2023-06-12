import React from 'react';
import "./MembersCard.sass"
import pic from "../picture.png"
const MembersCard = () => {
    return (
        <section className="membersCard">
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
    );
};

export default MembersCard;