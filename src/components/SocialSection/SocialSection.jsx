import React from 'react';
import "./SocialSection.sass"
import {useForm} from "react-hook-form";
import RegistrationInput from "../Registration/RegistrationInput/RegistrationInput";

const SocialSection = () => {
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm();


    return (
        <section className={'social'}>
           <div className="social__wrapper">
               <h2 className="social__txt">Социальные сети</h2>
               <div className="social__form">
                   <RegistrationInput type={'text'} title={'Instagram'} name={'instagram'}/>
                   <RegistrationInput type={'text'} title={'Facebook'} name={'facebook'}/>
                   <RegistrationInput type={'text'} title={'Twitter'} name={'twitter'}/>
               </div>
           </div>
            
        </section>
    );
};

export default SocialSection;