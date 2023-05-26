import React from 'react';
import './ContactData.sass'

const ContactData = () => {
    return (
        <div className="contactData">
            <h2 className="contactData__h2">
                Введите данные о контактном лице
            </h2>
            <label htmlFor="" className="contactData__label">
                <span>ФИО <span className="contactData__span">*</span></span>
                <input type="text"/>
            </label>
            <label htmlFor="" className="contactData__label">
                <span>Должность <span className="contactData__span">*</span></span>
                <input type="text"/>
            </label>
            <label htmlFor="" className="contactData__label">
                <span>Телефон <span className="contactData__span">*</span></span>
                <input type="tel"/>
            </label>
            <label htmlFor="" className="contactData__label">
                <span>WhatsApp <span className="contactData__span">*</span></span>
                <input type="tel"/>
            </label>

        </div>
    );
};

export default ContactData;