import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

import RegistrationSelectMember from "../RegistrationSelectMember/RegistrationSelectMember";
import RegistrationSelectIndustry from "../RegistrationSelectIndustry/RegistrationSelectIndustry";
import RegistrationSelectFashion from "../RegistrationSelectFashion/RegistrationSelectFashion";
import RegistrationSelectFood from "../RegistrationSelectFood/RegistrationSelectFood";
import ChooseIndustry from "../ChooseIndustry/ChooseIndustry";
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import RegistrationUploadInput from "../RegistrationUploadInput/RegistrationUploadInput";
import RegistrationPhoneNumber from "../RegistrationPhoneNumber/RegistrationPhoneNumber";
import CheckBox from "../CheckBox/CheckBox";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import RegistrationInputTextarea from "../RegistrationInputTextarea/RegistrationInputTextarea";
import SocialSection from "../../SocialSection/SocialSection";
import ContactFace from "../../ParticipantForm/ContactFace/ContactFace";
import RegistrationCountry from "../RegistrationCountry/RegistrationCountry";
import CheckBoxParticipant from "../CheckBoxParticipant/CheckBoxParticipant";

const RegistrationParticipant = () => {
    const {setClose, role, members} = useContext(CustomContext)
    return (
        <>
            <h3 className="registration__h3">Данные о компании</h3>
            <RegistrationInput type={"text"} title={"Название компании"} name={"company_one"}/>
            <RegistrationInput type={"text"} title={"Юридическое название компании"} name={"company_two"}/>
            <RegistrationInput type={"number"} title={"Количество сотрудников"} name={"number_of_employees"}/>
            <RegistrationSelectMember
                title={'Отрасль (Выберите одну из представленных “Строительство и недвижимость”)'}
                name={'trade'}/>
            {
                members === 'Другое' ?
                    <>
                        <RegistrationInput type={"text"} title={"Другое(Введите свою отрасль если не нашли среди предложенных)"} name={"other_trade"}/>
                    </>
                    : ""
            }

            <RegistrationInput type={"text"} title={"Направление (Напишите свой вид деятельности “Производство кирпичей”)"} name={"direction"}/>
            <RegistrationInputTextarea
                name={"describe_company"}
                title={"Опишите свою деятельность (товар или услугу)"}
                p={"*данная информация будет указана в профиле компании важно для участников выставки более подробно описать*"}
                placeholder={"Пример: Мы предоставляем различные способы оплаты для наших товаров, чтобы обеспечить удобство и гибкость для наших клиентов. Вы можете выбрать один из следующих способов оплаты при приобретении наших товаров:"}
            />
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <RegistrationCountry title={"Страна:"} name={"country"}/>
                    <RegistrationInput type={"text"} title={"Город:"} name={"city"}/>
                    <RegistrationInput type={"text"} title={"Юридический адрес"} name={"address_one"}/>
                    <RegistrationInput type={"text"} title={"Фактический адрес"} name={"address_two"}/>
                </div>
                <div className="registration__column">
                    <RegistrationInput type={"email"} title={"Адрес электронной почты компании"} name={"workEmail"} notrequired={true}/>
                    <RegistrationPhoneNumber title={'Контактный телефон компании'} name={'work_phone'}/>
                    <RegistrationInput type={"text"} title={"Сайт"} name={"web_site"} notrequired={true}/>
                    <RegistrationInput type={"text"} title={"Facebook"} name={"facebook"} notrequired={true}/>
                    <RegistrationInput type={"text"} title={"Инстаграм"} name={"instagram"} notrequired={true}/>
                </div>
            </div>
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <h3 className="registration__h3">Свидетельство о юридической регистрации</h3>
                    <RegistrationInput type={'text'} name={'inn'} title={'ИИН/ИНН(Серия патента компании)'}/>
                    <RegistrationInput type={'text'} name={'orgn'} title={'ОГРН/Номер патента'}/>
                    <RegistrationInput type={'text'} name={'okpo'} title={'ОКПО'}/>
                    <RegistrationUploadInput name={"photo_company"} title={"Загрузите устав компании (документ/pdf)"}/>
                </div>
                <div className="registration__column">
                    <h3 className="registration__h3">Реквизиты <br/> банковского счета</h3>
                    <RegistrationInput type={'text'} name={'name_bank'} title={'Наименование банка'}/>
                    <RegistrationInput type={'text'} name={'p_c'} title={'Р/С'}/>
                    <RegistrationInput type={'text'} name={'bik'} title={'БИК'}/>
                    <RegistrationUploadInput name={"image_logo"} title={"Логотип компании в  png или jpg"}/>
                </div>
            </div>
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <h3 className="registration__h3">Данные о руководителе</h3>
                    <RegistrationInput type={'text'} name={'name_manager'} title={'ФИО'}/>
                    <RegistrationInput type={'date'} name={'birth_manager'} title={'Дата рождения'}/>
                    <RegistrationInput type={'text'} name={'inn_manager'} title={'ИНН/ИИН руководителя'}/>
                    <RegistrationInput type={'text'} name={'position_manager'} title={'Должность'}/>
                    <RegistrationInput type={'text'} name={'active_manager'} title={'Действующий на основании'}/>
                </div>
                <div className="registration__column">
                    <h3 className="registration__h3">Контактное лицо</h3>
                    <ContactFace/>
                    <RegistrationInput type={"email"} title={"Адрес электронной почты (данная почта указывается как логин для входа)"} name={"email"}/>
                    <RegistrationPassword/>


                </div>
            </div>
            <CheckBox/>
            <CheckBoxParticipant/>

        </>
              );
};

export default RegistrationParticipant;