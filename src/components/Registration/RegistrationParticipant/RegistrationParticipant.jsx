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
import CheckBox from "../../CheckBox/CheckBox";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import RegistrationInputTextarea from "../RegistrationInputTextarea/RegistrationInputTextarea";
import SocialSection from "../../SocialSection/SocialSection";
import ContactFace from "../../ParticipantForm/ContactFace/ContactFace";
import RegistrationCountry from "../RegistrationCountry/RegistrationCountry";

const RegistrationParticipant = () => {
    const {setClose, role, members} = useContext(CustomContext)
    return (
        <>
            <h3 className="registration__h3">Данные о компании</h3>
            <RegistrationInput type={"text"} title={"Название компании"} name={"Название компании"}/>
            <RegistrationInput type={"text"} title={"Юридическое название компании"} name={"Юридическое название компании"}/>
            <RegistrationInput type={"number"} title={"Количество сотрудников"} name={"Количество сотрудников"}/>
            <RegistrationSelectMember
                title={'Отрасль (Выберите одну из представленных “Строительство и недвижимость”)'}
                name={'participation_sector'}/>
            {
                members === 'Другое' ?
                    <>
                        <RegistrationInput type={"text"} title={"Другое(Введите свою отрасль если не нашли среди предложенных)"} name={"Другое(Введите свою отрасль если не нашли среди предложенных)"}/>
                    </>
                    : ""
            }

            <RegistrationInput type={"text"} title={"Направление (Напишите свой вид деятельности “Производство кирпичей”)"} name={"Направление (Напишите свой вид деятельности “Производство кирпичей”)"}/>
            <RegistrationInputTextarea
                name={"Опишите свою деятельность (товар или услугу)"}
                title={"Опишите свою деятельность (товар или услугу)"}
                p={"*данная информация будет указана в профиле компании важно для участников выставки более подробно описать*"}
                placeholder={"Пример: Мы предоставляем различные способы оплаты для наших товаров, чтобы обеспечить удобство и гибкость для наших клиентов. Вы можете выбрать один из следующих способов оплаты при приобретении наших товаров:"}
            />
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <RegistrationCountry title={"Страна:"} name={"country"}/>
                    <RegistrationInput type={"text"} title={"Город:"} name={"city"}/>
                    <RegistrationInput type={"text"} title={"Юридический адрес"} name={"Юридический адрес"}/>
                    <RegistrationInput type={"text"} title={"Фактический адрес"} name={"Фактический адрес"}/>
                </div>
                <div className="registration__column">
                    <RegistrationInput type={"email"} title={"Адрес электронной почты"} name={"Адрес электронной почты"}/>
                    <RegistrationInput type={"text"} title={"Сайт"} name={"Сайт"}/>
                    <RegistrationInput type={"text"} title={"ФБ"} name={"ФБ"}/>
                    <RegistrationInput type={"text"} title={"Инстаграм"} name={"Инстаграм"}/>
                </div>
            </div>
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <h3 className="registration__h3">Свидетельство о юридической регистрации</h3>
                    <RegistrationInput type={'text'} name={'ИИН/ИНН(Серия патента компании)'} title={'ИИН/ИНН(Серия патента компании)'}/>
                    <RegistrationInput type={'text'} name={'ОГРН(Номер патента)*'} title={'ОГРН(Номер патента)'}/>
                    <RegistrationInput type={'text'} name={'ОКПО*'} title={'ОКПО'}/>
                    <RegistrationUploadInput name={"Загрузите устав компании в  png или jpg*"} title={"Загрузите устав компании в  png или jpg"}/>
                </div>
                <div className="registration__column">
                    <h3 className="registration__h3">Реквизиты <br/> банковского счета</h3>
                    <RegistrationInput type={'text'} name={'Наименование банка'} title={'Наименование банка'}/>
                    <RegistrationInput type={'text'} name={'Р/С*'} title={'Р/С'}/>
                    <RegistrationInput type={'text'} name={'БИК*'} title={'БИК'}/>
                    <RegistrationUploadInput name={"Логотип компании в png или jpg"} title={"Логотип компании в  png или jpg"}/>
                </div>
            </div>
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <h3 className="registration__h3">Данные о руководителе</h3>
                    <RegistrationInput type={'text'} name={'ФИО'} title={'ФИО'}/>
                    <RegistrationInput type={'text'} name={'Дата рождения'} title={'Дата рождения'}/>
                    <RegistrationInput type={'text'} name={'ИНН/ИИН руководителя'} title={'ИНН/ИИН руководителя'}/>
                    <RegistrationInput type={'text'} name={'Должность'} title={'Должность'}/>
                    <RegistrationInput type={'text'} name={'Действующий на основании'} title={'Действующий на основании'}/>
                </div>
                <div className="registration__column">
                    <h3 className="registration__h3">Контактное лицо</h3>
                    <ContactFace/>
                    <RegistrationInput type={"email"} title={"Адрес электронной почты (данная почта указывается как логин для входа)"} name={"email"}/>
                    <RegistrationPassword/>


                </div>
            </div>
            <CheckBox/>

        </>
              );
};

export default RegistrationParticipant;