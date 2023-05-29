import React from 'react';
import './SectorCard.sass'
import Btn from "../../../../components/Btn/Btn";




const SectorCard = ({img,icon,title,text,link}) => {
    return (
        <div className="sector-card">
            <div className="sector-card__img">
                <img src={img} alt=" картинка"/>
            </div>
            <div className="sector-card__txt">
                <h3 className="sector-card__h3">
                    {title}
                </h3>
                <p className="sector-card__p">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default SectorCard;