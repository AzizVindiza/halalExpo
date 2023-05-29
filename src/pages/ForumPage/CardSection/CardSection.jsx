import React from 'react';
import './CardSection.sass'


const CardSection = () => {
    return (
        <section className="card">
            <div className="container card__container">
                <h2 className="card__h2">29 июля</h2>
                <div className="card__lists">
                    <div className="card__text">

                        <div className="card__wrapper">
                            <div className="card__block">
                                08:00-10:00
                            </div>
                            <h3 className="card__h3">Регистрация</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                10:00-10:30

                            </div>
                            <h3 className="card__h3">Открытие</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                10:30-13:00

                            </div>
                            <h3 className="card__h3">Обзор экспонентов</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                13:00-14:00

                            </div>
                            <h3 className="card__h3">Обед в Food зоне</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                14:00-19:00

                            </div>
                            <h3 className="card__h3">Обзор экспонентов</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                19:00-20:00

                            </div>
                            <h3 className="card__h3">Завершение</h3>

                        </div>


                    </div>
                    <div className="card__text">
                        <div className="card__wrapper">
                            <div className="card__block">
                                12:00-13:00

                            </div>
                            <h3 className="card__h3">Food show</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                14:00-15:00

                            </div>
                            <h3 className="card__h3">Показ мод халяль-одежды</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                15:00-16:00

                            </div>
                            <h3 className="card__h3">Speaker</h3>

                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default CardSection;