import React, {useState} from 'react';
import "./datacompany.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import {useSelector} from "react-redux";
import ModalData from "./ModalData/ModalData";
import {useGetUserDataBossQuery} from "../../../../../redux/ApiSlice";
const DataCompany = () => {
    const  {user} = useSelector((store) => store.user)
    const {data : item = {}} = useGetUserDataBossQuery(user.uniqueId)

    const [openModalData,setOpenModalData] = useState(false)
    return (
        <div className={'datacompany'}>
            <h2 className="datacompany__h2">Данные о компании</h2>
            <div className="datacompany__wrapper">
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Название компании</h3>
                    <h4 className={"datacompany__span"}>{item.company_one}</h4>
                    <h2 className={"datacompany__h3"}>Страна</h2>
                    <h2 className={"datacompany__span"}>{item.country}</h2>
                </div>
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Юридическое название компании</h3>
                    <h4 className={"datacompany__span"}>{item.company_two}</h4>
                    <h2 className={"datacompany__h3"}>Город</h2>
                    <h2 className={"datacompany__span"}>{item.city}</h2>
                </div>
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Количество сотрудников</h3>
                    <h4 className={"datacompany__span"}>{item.personnel}</h4>
                    <h2 className={"datacompany__h3"}>Юридический адрес</h2>
                    <h2 className={"datacompany__span"}>{item.address_one}</h2>
                </div>
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Направление</h3>
                    <h4 className={"datacompany__span"}>{item.direction}</h4>
                    <h2 className={"datacompany__h3"}>Фактический адрес</h2>
                    <h2 className={"datacompany__span"}>{item.address_two}</h2>
                </div>
            </div>
            <h3 className="datacompany__h3">Описание</h3>

                <p className="datacompany__p">{item.description}</p>
            <div className="datacompany__inner">
                <div></div>
                <div onClick={() => setOpenModalData(true)}>
                    <BtnProfile text={'Редактировать'}/>
                </div>
            </div>
            {
                openModalData && <ModalData setOpenModal={setOpenModalData}/>
            }
        </div>
    );
};

export default DataCompany;