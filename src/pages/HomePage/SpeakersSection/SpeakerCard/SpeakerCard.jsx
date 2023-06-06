import React from 'react';
import "./speakerCard.sass"
import pic from "./pic.png"
const SpeakerCard = () => {
    return (
        <div className={'speakerCard'}>
            <div className="speakerCard__box">
                <h3 className="speakerCard__h3">Тилек Токтогазиев</h3>
                <p className="speakerCard__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
            </div>
            <div className="speakerCard__pic">
                <img src={pic} className={'speakerCard__img'} alt="speaker"/>
            </div>
        </div>
    );
};

export default SpeakerCard;