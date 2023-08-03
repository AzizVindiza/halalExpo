import React, {useState} from 'react';
import "./dataBoss.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import {useSelector} from "react-redux";
import ModalDataBoss from "./ModalDataBoss/ModalDataBoss";
import {useForm} from "react-hook-form";
import {useGetUserDataBossQuery} from "../../../../../redux/ApiSlice";

const DataBoss = () => {
     const {user} = useSelector((store) => store.user)

    const {data : item, error, isLoading = {}} = useGetUserDataBossQuery(user.uniqueId)


    const {register,handleSubmit} = useForm()
    const [modalDataBoss,setModalDataBoss] = useState(false)

    if (isLoading) {
        return  <div>Loading...</div>
    }


    if (error) {
        return  <div>Error : {error.message}</div>
    }
    return (
        <div className={'dataBoss'}>
            <div className="dataBoss__wrapper">
                <div className="dataBoss__left">
                    <h2 className="dataBoss__h2">Данные о руководителя</h2>
                    <div className="dataBoss__block">
                        <h3 className="dataBoss__h3">{item.name_manager}</h3>
                        <span className="dataBoss__span">(Руководитель)</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Дата рождения</h4>
                        <span className="dataBoss__span">{item.date_of_birth}</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">ИНН</h4>
                        <div className="dataBoss__span">{item.iin_inn}</div>
                    </div>

                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Действующий на основании</h4>
                        <span className={'dataBoss__span'}>{item.effective}</span>
                    </div>
                    <h4 className="dataBoss__h4">+Добавить номер телефона</h4>
                </div>
                <div className="dataBoss__right">
                    <h2 className="dataBoss__h2">Контактное лицо</h2>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">ФИО</h4>
                        <span className="dataBoss__span">{item.name_cont_person}</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Номер телефона</h4>
                        <span className="dataBoss__span">{item.number_cont_person}</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Email</h4>
                        <div className="dataBoss__span">{item.email}</div>
                    </div>
                    <div className={'datacompany__btn'}  onClick={() => setModalDataBoss(true) }>
                        <BtnProfile text={'Отправить запрос на редактирование'}/>
                    </div>
                </div>
            </div>
            {
                modalDataBoss && <ModalDataBoss setModalDataBoss={setModalDataBoss}/>
            }
        </div>
    );
};

export default DataBoss;