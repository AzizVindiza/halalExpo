import React from 'react';
import "./contactsForm.sass"
import Btn from "../../../../components/Btn/Btn";
const ContactsForm = () => {
    return (
        <section className={'contactsForm'}>
            <div className="container contactsForm__contactsForm">
                <div className="contactsForm__box">
                    <div className="contactsForm__wrapper">
                        <h2 className="contactsForm__h2">Обратная связь</h2>
                        <div className="contactsForm__line"></div>
                    </div>
                    <form className="contactsForm__form">
                        <label  className="contactsForm__label">
                            <input placeholder={'Имя*'} type="text" className="contactsForm__input"/>
                        </label>
                        <label  className="contactsForm__label">
                            <input placeholder={'Email*'} type="email" className="contactsForm__input"/>
                        </label>
                        <label  className="contactsForm__label">
                            <input placeholder={'Телефон*'} type="number" className="contactsForm__input"/>
                        </label>
                        <label  className="contactsForm__label">
                            <textarea placeholder={'Сообщения*'} type="text" className="contactsForm__input"/>
                        </label>
                    </form>
                    <div className="contactsForm__btn">
                        <Btn text={'ОТПРАВИТЬ'}/>
                    </div>
                </div>

             </div>
        </section>
    );
};

export default ContactsForm;