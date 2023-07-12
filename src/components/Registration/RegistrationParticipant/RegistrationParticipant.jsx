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
            <RegistrationInput type={"text"} title={"Другое(Введите свою отрасль если не нашли среди предложенных)"} name={"Другое(Введите свою отрасль если не нашли среди предложенных)"} notrequired={true}/>
            <RegistrationInput type={"text"} title={"Направление (Напишите свой вид деятельности “Производство кирпичей”)"} name={"Направление (Напишите свой вид деятельности “Производство кирпичей”)"} notrequired={true}/>
            <RegistrationInputTextarea
                name={"Опишите свою деятельность (товар или услугу)"}
                title={"Опишите свою деятельность (товар или услугу)"}
                p={"*данная информация будет указана в профиле компании важно для участников выставки более подробно описать*"}
                placeholder={"Пример: Мы предоставляем различные способы оплаты для наших товаров, чтобы обеспечить удобство и гибкость для наших клиентов. Вы можете выбрать один из следующих способов оплаты при приобретении наших товаров:"}
            />
            <div className="registration__column-wrapper">
                <div className="registration__column">
                    <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
                    <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
                </div>
                <div className="registration__column">
                    <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
                    <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
                    <RegistrationCountry/>
                </div>
            </div>

            <RegistrationInput type={'text'} name={'inn'} title={'ИНН'}/>
            <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>
            <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
            <RegistrationPassword/>
            <CheckBox/>
            <RegistrationSelectMember
                title={'Выберите сектор участия (с условиями участия каждого сектора можно ознакомится)'}
                name={'participation_sector'}/>
            {members === 'Trade' ?
                <RegistrationSelectIndustry title={'Выберите отрасль'} name={'trade'}/>
                :
                members === "Fashion" ?
                    <RegistrationSelectFashion title={'Выберите направление'}
                                               name={'choose_direction_fashion'}/>
                    :
                    members === 'Food' ?
                        <RegistrationSelectFood title={'Выберите направление'}
                                                name={'choose_direction_food'}/>
                        :
                        members === "Investment" ?
                            <ChooseIndustry/>
                            : ""
            }
            {/*<RegistrationSelect title={"В качестве кого вы хотите посетить HIT EXPO?"}*/}
            {/*                    name={"participant_sector"}/>*/}

            <RegistrationInput type={'text'} name={'brand'} title={'Наименование бренда'}/>
            <RegistrationUploadInput name={"image_logo"} title={"Загрузите логотип компании в png или jpg"}/>
            {/*далее*/}
            <RegistrationInput type={'text'} name={'development_name'} title={'Полное юридическое наименование организации'}/>
            <RegistrationInput type={'text'} name={'address_development'} title={'Юридический адрес'}/>
            <RegistrationInput type={'text'} name={'p_c'} title={'Р/С'}/>
            <RegistrationInput type={'text'} name={'bik'} title={'БИК'}/>
            <RegistrationInput type={'text'} name={'okpo'} title={'ОКПО'}/>
                {/*далее*/}
                <RegistrationUploadInput name={"pdf_file"} title={"Загрузите свидетельство регистрации в pdf"}/>
                <RegistrationInput type={'text'} name={'name_manager'} title={'ФИО руководителя'}/>
                <RegistrationInput type={'text'} name={'position_participant'} title={'Должность'}/>
                <RegistrationInput type={'text'} name={'company'} title={'Деятельность компании'}/>
                <RegistrationInputTextarea  type={'text'} name={'description'} title={'Опишите товары или услуги компании'}/>
                {/*далее*/}
                <RegistrationInput type={'url'} name={'web_site'} title={'Веб-сайт '}/>
                <SocialSection/>
                <ContactFace/>
        </>
              );
};

export default RegistrationParticipant;