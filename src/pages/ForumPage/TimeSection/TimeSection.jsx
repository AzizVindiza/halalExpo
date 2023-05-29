import React from 'react';
import "./TimeSection.sass"

const TimeSection = () => {
    return (
        <section className="time">
            <div className="time__container">
                <div className={'time__wrapper'}>
                    <div className="time__txt">
                        <h2 className="time__h2">30 Июля</h2>
                        <div className="time__date">
                            <div className="time__block">
                                08:00-10:00
                            </div>
                            <h3 className="time__h3">Регистрация</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                10:00-13:00

                            </div>
                            <h3 className="time__h3">Обзор экспонентов</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                13:00-14:00

                            </div>
                            <h3 className="time__h3">Обед</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                14:00-16:00

                            </div>
                            <h3 className="time__h3">Invest</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                14:00-19:00

                            </div>
                            <h3 className="time__h3">Show program/Podium</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                19:00-20:00

                            </div>
                            <h3 className="time__h3">Официальное закрытие</h3>

                        </div>

                    </div>
                    <div className="time__txt">
                        <h2 className="time__h2">31 Июля</h2>
                        <div className="time__date">
                            <div className="time__block">
                                10:00-12:00
                            </div>
                            <h3 className="time__h3">B2B</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                13:00-14:00

                            </div>
                            <h3 className="time__h3">Обед</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                14:00-19:00

                            </div>
                            <h3 className="time__h3">B2B</h3>

                        </div>


                    </div>
                    <div className="time__txt">
                        <h2 className="time__h2">1 Июня</h2>
                        <div className="time__date">
                            <div className="time__block">
                                10:00-12:00
                            </div>
                            <h3 className="time__h3">Пресс конференция</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                12:00-13:00

                            </div>
                            <h3 className="time__h3">Обед</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                13:00-14:00

                            </div>
                            <h3 className="time__h3">Отель</h3>

                        </div>
                        <div className="time__date">
                            <div className="time__block">
                                14:00-18:00

                            </div>
                            <h3 className="time__h3">Экскурсия</h3>

                        </div>


                    </div>

                </div>



            </div>

        </section>
    );
};

export default TimeSection;