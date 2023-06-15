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
                <h2 className=" aboutSection__h2">Спонсорство</h2>
                <p className=" aboutSection__p">Для успешной организации выставки Halal Investment and Trade Expo 2023 организаторы получили поддержку от многих крупных компаний, которые стали ее спонсорами. Они внесли значительный вклад в развитие халяль-индустрии в Кыргызстане и странах Центральной Азии, а также поддержали создание международной площадки для инвесторов, предпринимателей и производителей.
                    <br/>
                    <br/>
                    Мы благодарим наших спонсоров за поддержку и уверены, что их участие в выставке приведет к успешным результатам и станет важным шагом в развитии халяль-бизнеса.</p>
                <div onClick={() => setRequest(!request)} className="aboutSection__btn">
                    <Btn type={'button'} text={'Оставить заявку'} m={'aboutSection'}/>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;