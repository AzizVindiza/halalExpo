import React from 'react';
import "./certification.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
const Certification = ({title,title2,title3,text,text2,text3}) => {
    return (
        <div className={'certification'}>
            <h2 className="certification__h2"></h2>
            <div className="certification__wrapper">
                <div className="certification__left">
                    <h2 className="certification__h2">{text}</h2>
                    <h2 className="certification__h2">{text2}</h2>
                    <h2 className="certification__h2">{text3}</h2>
                </div>
                <div className="certification__right">
                    <h3 className="certification__h3">{title}</h3>
                    <h3 className="certification__h3">{title2}</h3>
                    <h3 className="certification__h3">{title3}</h3>
                </div>
            </div>
            <div className="certification__inner">
                <div></div>
                <BtnProfile text={'Отправить запрос на редактирование'}/>
            </div>
        </div>
    );
};

export default Certification;