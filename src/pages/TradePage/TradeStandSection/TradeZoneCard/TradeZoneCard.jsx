import React from 'react';
import './TradeZoneCard.sass'

const TradeZoneCard = ({item}) => {
    return (
        <div className={"tradeZoneCard"}>
            <div className="tradeZoneCard__box">
                <div className="tradeZoneCard__img">
                    <img src={item.img} alt=""/>
                </div>
                <ul className="tradeZoneCard__ul">
                    {item.li.map((item,idx)=>(
                        <li key={idx} className="tradeZoneCard__li">{item}</li>
                    ))}

                </ul>

            </div>

        </div>
    );
};

export default TradeZoneCard;