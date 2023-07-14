import React, {useContext} from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import info from "./info.gif"
import general from "./general.svg"
import times from "./times.svg"
import {CustomContext} from "../../../Context";


const PartnersSection = () => {
    const {setRequest}=useContext(CustomContext)
    return (
        <section className="partners">
            <h2 className="partners__title">
                Информационные партнеры
            </h2>
            <div className="container partners__container">
                <a href={"https://10times.com/event/882632"} className="partners__card">
                    <img className={'partners__img'} src={times} alt=""/>
                    <h2 className="partners__h2">
                        Tentimes

                    </h2>
                </a>
                <a href={"https://generalexpo.ru/cat_exhibition/events/event_info/e17025"} className="partners__card">
                    <img className={'partners__img'} src={general} alt=""/>
                    <h2 className="partners__h2">
                        Generalexpo

                    </h2>
                </a>
                <a href={"https://expomap.ru/expo/halal-investment-and-trade-expo/"} className="partners__card">
                    <img className={'partners__img'} src={info} alt=""/>
                    <h2 className="partners__h2">
                        Expomap

                    </h2>
                </a>
            </div>
            <div onClick={() => setRequest(true)}  className="speaker__btn partners__btn">
                <Btn m={"big btn_border"} type="button" text="Стать партнером"/>
            </div>

        </section>
    );
};

export default PartnersSection;