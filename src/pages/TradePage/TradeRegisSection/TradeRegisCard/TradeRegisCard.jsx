import React from 'react';
import './TradeRegisCard.sass'

const TradeRegisCard = ({item}) => {
    return (
        <div className="tradeRegisCard">
            <div className="tradeRegisCard__tooltip">
                <div className="tradeRegisCard__img"></div>
                <h3 className="tradeRegisCard__h3">{item.name}</h3>
                <p className="tradeRegisCard__p">{item.p}</p>
            </div>

        </div>
    );
};

export default TradeRegisCard;