import React from 'react';
import './LoginForm.sass'

const LoginForm = () => {
    return (
        <section className="loginForm">
            <label htmlFor="" className="loginForm__label">
                Электронная почта*
                <input type="text"/>
            </label>

            <label htmlFor="" className="loginForm__label">
                Придумайте пароль*
                <input type="text"/>
            </label>

            <label htmlFor="" className="loginForm__label">
                Подтвердите пароль*
                <input type="text"/>
            </label>


        </section>
    );
};

export default LoginForm;