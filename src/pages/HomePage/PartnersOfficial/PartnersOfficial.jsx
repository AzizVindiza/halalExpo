import React, {useContext} from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import car from './car.svg'
import cit from "./cit.svg"
import newline from "./newline.svg"
import {CustomContext} from "../../../Context";


const PartnersOfficial = () => {
    const {setRequest}=useContext(CustomContext)
    return (
        <section className="partners">
            <h2 className="partners__title">Партнеры мероприятия</h2>
            <div className="container partners__container">
                <div className="partners__card">
                    <img className={'partners__img'}  src={newline} alt=""/>
                    <h2 className="partners__h2">
                        Newline Itech
                    </h2>
                </div>
                <div className="partners__card">
                        <img className={'partners__img'}  src={cit} alt=""/>
                    <h2 className="partners__h2">
                        Conference
                        International & Translation
                    </h2>
                </div>
                <div className="partners__card ">
                    <img className={'partners__img car'}  src={car} alt=""/>
                    <h2 className="partners__h2">
                        Vip kortege
                    </h2>
                </div>
            </div>
            <div onClick={() => setRequest(true)}  className="speaker__btn partners__btn">
                <Btn type="button" m={"big btn_border"} text="Стать партнером"/>
            </div>

        </section>
    );
};

export default PartnersOfficial;