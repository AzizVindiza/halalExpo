import React from 'react';
import './SectorCard.sass'
import Btn from "../../../../components/Btn/Btn";
const SectorCard = ({img,icon,title,text,link}) => {
    return (
        <div className="sector-card sector-card_left">
            <div className="sector-card__img">
                <img src={img} alt=" картинка"/>
            </div>
            <div className="sector-card__txt">
                <div className="sector-card__icon">
                    <img src={icon} alt=" иконка"/>
                </div>
                <h3 className="sector-card__h3">
                    {title}
                </h3>
                <p className="sector-card__p">
                    {text}
                </p>
                <a className="sector-card__btn" href={link}>
                    <Btn type="button" text="Подробнее"/>
                </a>
            </div>
        </div>
    );
};

export default SectorCard;