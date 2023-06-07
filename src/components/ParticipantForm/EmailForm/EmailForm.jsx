import React, {useContext} from 'react';
import './EmailForm.sass'
import RegistrationInput from "../../Registration/RegistrationInput/RegistrationInput";
import RegistrationPassword from "../../Registration/RegistrationPassword/RegistrationPassword";

const EmailForm = () => {
    return (
        <section className="emailForm">
            <RegistrationInput type={'email'} name={'email_form'} title={'Электронная почта'}/>
            <RegistrationPassword />
        </section>
    );
};

export default EmailForm;