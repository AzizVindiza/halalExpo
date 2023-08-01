import React, {useState} from 'react';
import "./datacompany.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import {useSelector} from "react-redux";
import ModalData from "./ModalData/ModalData";
const DataCompany = () => {
    const  {user} = useSelector((store) => store.user)
    const [openModalData,setOpenModalData] = useState(true)
    return (
        <div className={'datacompany'}>
            <h2 className="datacompany__h2">Данные о компании</h2>
            <div className="datacompany__wrapper">
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Название компании</h3>
                    <h4 className={"datacompany__span"}>{user.company_two}</h4>
                    <h2 className={"datacompany__h3"}>Страна</h2>
                    <h2 className={"datacompany__span"}>{user.country}</h2>
                </div>
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Юридическое название компании</h3>
                    <h4 className={"datacompany__span"}>{user.company_two}</h4>
                    <h2 className={"datacompany__h3"}>Город</h2>
                    <h2 className={"datacompany__span"}>{user.city}</h2>
                </div>
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Количество сотрудников</h3>
                    <h4 className={"datacompany__span"}>{user.personnel}</h4>
                    <h2 className={"datacompany__h3"}>Юридический адрес</h2>
                    <h2 className={"datacompany__span"}>{user.address_one}</h2>
                </div>
                <div className="datacompany__row">
                    <h3 className={"datacompany__h3"}>Направление</h3>
                    <h4 className={"datacompany__span"}>{user.direction}</h4>
                    <h2 className={"datacompany__h3"}>Фактический адрес</h2>
                    <h2 className={"datacompany__span"}>{user.address_two}</h2>
                </div>
                {/*<ul className="datacompany__list">*/}
                {/*    <li className="datacompany__li">Название компании</li>*/}
                {/*    <li className="datacompany__li">Юридическое название компании</li>*/}
                {/*    <li className="datacompany__li">Количество сотрудников</li>*/}
                {/*    <li className="datacompany__li">Направление</li>*/}
                {/*</ul>*/}
                {/*<div className="datacompany__rigth">*/}
                {/*    <div  className="datacompany__label">*/}
                {/*        <span className={'datacompany__span'}>ssddsdsdsdsdasassdsdssd</span>*/}
                {/*    </div>*/}
                {/*      <div  className="datacompany__label">*/}
                {/*          <span className={'datacompany__span'}>{user.company_two}</span>*/}
                {/*     </div>*/}
                {/*      <div  className="datacompany__label">*/}
                {/*          <span className={'datacompany__span'}>{user.number_of_employees}</span>*/}
                {/*    </div>*/}
                {/*      <div  className="datacompany__label">*/}
                {/*          <span className={'datacompany__span'}>{user.other_trade}</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<ul className="datacompany__list">*/}
                {/*    <li className="datacompany__li">Страна</li>*/}
                {/*    <li className="datacompany__li">Город</li>*/}
                {/*    <li className="datacompany__li">Юридический адрес</li>*/}
                {/*    <li className="datacompany__li">Фактический адрес</li>*/}
                {/*</ul>*/}
                {/*<div className="datacompany__rigth">*/}

                {/*    <div  className="datacompany__label">*/}
                {/*        <span className={'datacompany__span'}>{user.country}</span>*/}
                {/*    </div>*/}
                {/*      <div  className="datacompany__label">*/}
                {/*          <span className={'datacompany__span'}>{user.city}</span>*/}
                {/*    </div>*/}
                {/*      <div  className="datacompany__label">*/}
                {/*          <span className={'datacompany__span'}>{user.address_one}</span>*/}
                {/*    </div>*/}
                {/*      <div  className="datacompany__label">*/}
                {/*          <span className={'datacompany__span'}>{user.address_two}</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <h3 className="datacompany__h3">Описание</h3>

                <p className="datacompany__p">{user.description}</p>
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