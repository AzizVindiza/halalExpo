import React, {useState} from 'react';
import "./certification.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import ModalCertification from "./ModalCertification/ModalCertification";
import {useSelector} from "react-redux";

const Certification = ({title, title2, title3, text2, text}) => {

    const  {user} = useSelector((store) => store.user)
    const [modalCertification,setModalCertification] = useState(false)
    return (
        <div className={'certification'}>
            <h2 className="certification__h2"></h2>
            <div className="certification__wrapper">
                <div className="certification__left">
                    <h2 className="certification__h2">ИНН</h2>
                    <h2 className="certification__h2">ОКПО</h2>
                </div>
                <div className="certification__right">
                    <h3 className="certification__h3">{user.iin_inn}</h3>
                    <h3 className="certification__h3">{user.orgn}</h3>
                    <h3 className="certification__h3">{user.okpo}</h3>
                </div>
            </div>
            <div className="certification__inner">
                <div></div>
                <div onClick={() => setModalCertification(true)}>
                    <BtnProfile text={'Отправить запрос на редактирование'}/>
                </div>
            </div>
            {
                modalCertification && <ModalCertification setModalCertification={setModalCertification}/>
            }
        </div>
    );
};

export default Certification;