import React, {useState} from 'react';
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import ModalCertification from "../Certification/ModalCertification/ModalCertification";
import ModalBank from "./ModalBank/ModalBank";
import {useSelector} from "react-redux";
import {useGetUserDataBossQuery} from "../../../../../redux/ApiSlice";

const BankProfile = () => {
    const  {user} = useSelector((store) => store.user)
    const {data : item = {}} = useGetUserDataBossQuery(user.uniqueId)
    const [modalBank,setModalBank] = useState(false)
    return (
        <div className={'certification'}>
            <h2 className="certification__h2">Реквизиты</h2>
            <div className="certification__wrapper">
                <div className="certification__left">
                    <h3 className="certification__h3">Наименование банка</h3>
                    <h3 className="certification__h3">Расчетный счет</h3>
                    <h3 className="certification__h3">БИК</h3>
                </div>
                <div className="certification__right">
                    <h3 className="certification__span">{item.bank}</h3>
                    <h3 className="certification__span">{item.p_c}</h3>
                    <h3 className="certification__span">{item.bik}</h3>
                </div>
            </div>
            <div className="certification__inner">
                <div className={'datacompany__btn'}  onClick={  ()  =>   setModalBank(true)}>
                    <BtnProfile text={'Редактировать'}/>
                </div>
            </div>
            {
                modalBank && <ModalBank setModalBank={setModalBank}/>
            }
        </div>
    );
};

export default BankProfile;