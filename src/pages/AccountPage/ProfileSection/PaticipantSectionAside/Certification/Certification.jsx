import React, {useState} from 'react';
import "./certification.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import ModalCertification from "./ModalCertification/ModalCertification";
import {useSelector} from "react-redux";
import {useGetUserDataBossQuery} from "../../../../../redux/ApiSlice";

const Certification = () => {

    const  {user} = useSelector((store) => store.user)
    const {data : item = {}} = useGetUserDataBossQuery(user.uniqueId)

    const [modalCertification,setModalCertification] = useState(false)
    return (
        <div className={'certification'}>
            <h2 className="certification__h2">Свидетельство о юридической регистарации</h2>
            <div className="certification__wrapper">
                <div className="certification__left">
                    <h2 className="certification__h3">ИНН</h2>
                    <h2 className="certification__h3">ОГРН</h2>
                    <h2 className="certification__h3">ОКПО</h2>
                </div>
                <div className="certification__right">
                    <h3 className="certification__span">{item.iin_inn}</h3>
                    <h3 className="certification__span">{item.ogrn}</h3>
                    <h3 className="certification__span">{item.okpo}</h3>
                </div>
            </div>
            <div className="certification__inner">
                <div></div>
                <div className={'datacompany__btn'}  onClick={() => setModalCertification(true)}>
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