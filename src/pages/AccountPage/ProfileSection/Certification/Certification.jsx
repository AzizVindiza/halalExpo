import React from 'react';
import "./certification.sass"
import BtnProfile from "../../../../components/BtnProfile/BtnProfile";
const Certification = () => {
    return (
        <div className={'certification'}>
            <h2 className="certification__h2"></h2>
            <div className="certification__wrapper">
                <div className="certification__left">
                    <h2 className="certification__h2">ИНН</h2>
                    <h2 className="certification__h2">ОГРН</h2>
                    <h2 className="certification__h2">ОКПО</h2>
                </div>
                <div className="certification__right">
                    <h3 className="certification__h3">2398484231-293</h3>
                    <h3 className="certification__h3">1-02-66-05-60662-0.</h3>
                    <h3 className="certification__h3">2308771683</h3>
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