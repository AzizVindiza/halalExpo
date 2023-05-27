import React from 'react';
import './StandCardSection.sass'
import standard from './standard.png'
import Btn from "../../../components/Btn/Btn";
import StCardBox from "./StCardBox/StCardBox";

const StandCardSection = () => {
    return (
        <section className='stCard'>
            <div className="stCard__container container">
                <StCardBox card={{name: "STANDARD",meter:"2m",pocket: "Пакет: Standard"}}/>
                <StCardBox card={{name: "STANDARD+",meter:"2m",pocket: 'Пакет: Standard +'}}/>
                <StCardBox card={{name: "SILVER",meter:"6m", pocket: "Пакет: Silver"}}/>
                <StCardBox card={{name: "SILVER",meter:"6m", pocket: "Пакет: Silver +"}}/>
                <StCardBox card={{name: "Gold",meter:"9m", pocket: "Пакет: Gold"}}/>
                <StCardBox card={{name: "Gold+",meter:"9m", pocket: "Пакет: Gold +"}}/>
                <StCardBox card={{name: "PLATINUM",meter:"12m", pocket: "Пакет: Platinum"}}/>
                <StCardBox card={{name: "PLATINUM",meter:"12m", pocket: "Пакет: Platinum +"}}/>
                <StCardBox card={{name: "PLATINUM",meter:"12m", pocket: "Пакет: Platinum +"}}/>
            </div>
        </section>
    );
};

export default StandCardSection;