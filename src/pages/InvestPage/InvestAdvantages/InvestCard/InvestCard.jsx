import React from 'react';
import './investCard.sass'

const InvestCard = ({item}) => {
    return (
        <div className={"investCard"}>
            <div className="investCard__box">
                <div className="investCard__img">

                </div>
                <div className="investCard__column">
                    <h3 className="investCard__h3">{item.h3}</h3>
                    <p className="investCard__p">{item.p}</p>
                </div>
            </div>

        </div>
    );
};

export default InvestCard;