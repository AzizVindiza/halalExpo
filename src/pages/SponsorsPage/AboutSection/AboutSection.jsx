import React, {useContext} from 'react';
import "./aboutSection.sass"
import Btn from "../../../components/Btn/Btn";
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";
const AboutSection = () => {
    const {request,setRequest} = useContext(CustomContext)
    const {t} = useTranslation()

    return (
        <section  className={'aboutSection'}>
            <div className="aboutSection__container container">
                <h2 className=" aboutSection__h2">{t("sponsorsPage.title")}</h2>
                <p className=" aboutSection__p">{t("sponsorsPage.text")}</p>
                <div onClick={() => setRequest(!request)} className="aboutSection__btn">
                    <Btn type={'button'} text={'Оставить заявку'} m={'aboutSection'}/>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;