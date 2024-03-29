import React from 'react';
import './CardSection.sass'


const CardSection = () => {
    return (
        <section className="card">
            <div className="container card__container">


                <div className="card__lists">

                    <div className="card__text">
                        <h2 className="card__h2">26.08 Первый день выставки </h2>

                        <div className="card__wrapper">
                            <div className="card__block">
                                07:30-09:00
                            </div>
                            <h3 className="card__h3">Регистрация участников</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                09:00-10:30

                            </div>
                            <h3 className="card__h3">Церемония открытия</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                10:30-13:30

                            </div>
                            <h3 className="card__h3">Посещения выставки</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                13:30-14:00

                            </div>
                            <h3 className="card__h3">Обеденный перерыв</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                14:00-17:00

                            </div>
                            <h3 className="card__h3">Посещение выставки</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                17:00-19:00

                            </div>
                            <h3 className="card__h3">B2B втсречи</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                19:00-20:00

                            </div>
                            <h3 className="card__h3">Завершение первого дня выставки, трансфер в отели</h3>

                        </div>


                    </div>
                    <div className="card__text">
                        <h2 className="card__h2">Параллельные мероприятия</h2>
                        <div className="card__wrapper">
                            <div className="card__block">
                                10:30-17:00

                            </div>
                            <h3 className="card__h3">Презентация инвестиционных проектов</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                13:30-14:20

                            </div>
                            <h3 className="card__h3">Время намаза</h3>

                        </div>
                        <div className="card__wrapper">
                            <div className="card__block">
                                14:00-17:00

                            </div>
                            <h3 className="card__h3">Показ мод/Fashion zone</h3>

                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default CardSection;