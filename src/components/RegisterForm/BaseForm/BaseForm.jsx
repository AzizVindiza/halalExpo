import React from 'react';
import './BaseForm.sass'

const BaseForm = () => {
    return (
        <>
            <section className="baseForm">
                <div className="baseForm__wrapper">
                        <h2 className="baseForm__h2">Регистрация</h2>
                    <p className="baseForm__p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                    </p>
                    <form className="baseForm__form">
                        <label className="baseForm__label" htmlFor="">Имя
                            <input type="text"/>
                        </label>


                        <label className="baseForm__label" htmlFor="">Фамилия
                            <input type="text"/>
                        </label>


                        <label className="baseForm__label" htmlFor="">Отечество
                            <input type="text"/>
                        </label>


                        <label className="baseForm__label" htmlFor="">Email
                            <input type="text"/>
                        </label>


                        <label className="baseForm__label" htmlFor="">Страна
                            <input type="text"/>
                        </label>


                        <label className="baseForm__label" htmlFor="">Город
                            <input type="text"/>
                        </label>


                        <label className="baseForm__label" htmlFor="">Дата рождения
                            <input type="text"/>
                        </label>


                </form>
                </div>
            </section>

        </>
    );
};

export default BaseForm;