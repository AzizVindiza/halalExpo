import React from 'react';
import "./EdgeCard.sass"
import img1 from "../img/img1.svg"
import img2 from "../img/img2.svg"
import img3 from "../img/img3.svg"
import img4 from "../img/img4.svg"
import img5 from "../img/img5.svg"
import img6 from "../img/img6.svg"
import img7 from "../img/img7.svg"
import img8 from "../img/img8.svg"
import img9 from "../img/img9.svg"
import img10 from "../img/img10.svg"

const EdgeCard = () => {
    return (
        <section className={'edgecard'}>
            <div className="container edgecard__container">
                <div className="edgecard__wrapper">
                    <h2 className="edgecard__h2">Преимущества</h2>
                    <div className="edgecard__card">
                        <div className="edgecard__block">
                            <div className="edgecard__img">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Уникальные возможности для бизнеса</h3>
                                <p className="edgecard__p">Посетители могут обнаружить множество новых перспективных бизнес-идей, инвестиционных проектов и торговых возможностей в рамках халяльной индустрии.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img1">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Широкий спектр отраслей</h3>
                                <p className="edgecard__p">Выставка объединяет представителей различных отраслей, включая технику, образование, моду, экотовары, туризм и другие, предоставляя посетителям разнообразные возможности для выбора и сотрудничества.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img3} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Новейшие решения и инновации</h3>
                                <p className="edgecard__p">Посетители смогут узнать о самых последних тенденциях и инновациях в халяльной индустрии, что поможет им оставаться впереди конкурентов и применять передовые решения в своем бизнесе.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img4} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Обучение и профессиональное развитие</h3>
                                <p className="edgecard__p">В рамках мероприятия будут проводиться обучающие сессии, мастер-классы и презентации проектов, предоставляя посетителям ценные знания и навыки для дальнейшего развития.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img5} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Сетевые возможности</h3>
                                <p className="edgecard__p">Мероприятие предоставляет идеальную площадку для установления новых деловых контактов, обмена опытом и налаживания партнерских отношений с ключевыми игроками в халяльной индустрии.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img6} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Культурные исследования</h3>
                                <p className="edgecard__p">Посетители смогут познакомиться с богатой культурой Кыргызстана и других стран Центральной Азии, включая традиции, ремесла и национальные атрибуты.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img7} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Развлечения и праздничная атмосфера</h3>
                                <p className="edgecard__p">В рамках мероприятия будут проводиться культурные и развлекательные мероприятия, что создаст приятную и праздничную атмосферу для всех посетителей.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img8} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Разнообразие продуктов и услуг</h3>
                                <p className="edgecard__p">Посетители смогут ознакомиться с широким ассортиментом халяльных товаров и услуг, представленных на выставке, и выбрать наиболее подходящие для своих потребностей.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img9} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Продвижение халяльного образа жизни</h3>
                                <p className="edgecard__p">Мероприятие способствует повышению осведомленности о халяльных продуктах и услугах, способствуя распространению принципов халяльного образа жизни.</p>
                            </div>

                        </div>
                        <div className="edgecard__block">
                            <div className="edgecard__img2">
                                <img src={img10} alt=""/>
                            </div>
                            <div className="edgecard__text">
                                <h3 className="edgecard__h3">Возможность участия в HIT AWARD</h3>
                                <p className="edgecard__p">Посетители могут стать частью премии HIT AWARD, где лучшие участники будут отмечены за свои достижения и вклад в развитие халяльной индустрии.</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
};

export default EdgeCard;