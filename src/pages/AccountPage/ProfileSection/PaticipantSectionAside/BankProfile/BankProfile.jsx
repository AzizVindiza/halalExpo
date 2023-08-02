import React, {useState} from 'react';
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import ModalCertification from "../Certification/ModalCertification/ModalCertification";
import ModalBank from "./ModalBank/ModalBank";
import {useSelector} from "react-redux";

const BankProfile = () => {
    const  {user} = useSelector((store) => store.user)
    const [modalBank,setModalBank] = useState(false)
    return (
        <div className={'certification'}>
            <h2 className="certification__h2"></h2>
            <div className="certification__wrapper">
                <div className="certification__left">
                    <h2 className="certification__h2">Наименование банка</h2>
                    <h2 className="certification__h2">Расчетный счет</h2>
                </div>
                <div className="certification__right">
                    <h3 className="certification__h3">{user.name_bank}</h3>
                    <h3 className="certification__h3">{user.p_c}</h3>
                    <h3 className="certification__h3">{user.bik}</h3>
                </div>
            </div>
            <div className="certification__inner">
                <div></div>
                <div onClick={() => setModalBank(true)}>
                    <BtnProfile text={'Отправить запрос на редактирование'}/>
                </div>
            </div>
            {
                modalBank && <ModalBank setModalBank={setModalBank}/>
            }
        </div>
    );
};

export default BankProfile;