import React from 'react';
import './edgeCard.sass'

const EdgeCard = ({item,img}) => {
    return (
        <div className={"edgeCard"}>
            <div className="edgeCard__img">
                <img src={img} alt=""/>
            </div>
            <div className="edgeCard__box">
                <h2 className="edgeCard__h2">
                    {item.h2}

                </h2>
                <p className="edgeCard__p">
                    {item.p}
                </p>
            </div>

        </div>
    );
};

export default EdgeCard;