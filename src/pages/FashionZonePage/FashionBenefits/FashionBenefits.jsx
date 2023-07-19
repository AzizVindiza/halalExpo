import React from 'react';
import './fashionBenefits.sass'
import f1 from "../img/f1.svg"
import f2 from "../img/f2.svg"
import f3 from "../img/f3.svg"
import f4 from "../img/f4.svg"
import f5 from "../img/f5.svg"
import f6 from "../img/f6.svg"



const FashionBenefits = () => {
    return (
        <section className={"fashionBenefits"}>
            <div className="fashionBenefits__container container">
                <h2 className="fashionBenefits__h2">
                    Преимущества
                </h2>
                <div className="fashionBenefits__wrapper">
                    <div className="fashionBenefits__row">
                        <div className="fashionBenefits__img">
                            <img src={f1} alt=""/>
                        </div>
                        <div className="fashionBenefits__box">
                            <h3 className="fashionBenefits__h3">
                                Демонстрация мусульманской моды
                            </h3>
                            <p className="fashionBenefits__p">
                                Fashion зона будет презентовать разнообразие стилей и дизайнов в мусульманской моде. Участники смогут представить свои коллекции на модных показах и показать уникальные модели, сочетающие в себе элегантность и соответствие халяльным требованиям.
                            </p>
                        </div>
                    </div>
                    <div className="fashionBenefits__row">
                        <div className="fashionBenefits__img">
                            <img src={f2} alt=""/>
                        </div>
                        <div className="fashionBenefits__box">
                            <h3 className="fashionBenefits__h3">
                                Реализация представленных моделей
                            </h3>
                            <p className="fashionBenefits__p">В рамках Fashion зоны участники смогут предложить свои модели и изделия для продажи. Посетители смогут приобрести эксклюзивные модели, выполненные в соответствии с принципами халяльности.
                            </p>
                        </div>
                    </div>
                    <div className="fashionBenefits__row">
                        <div className="fashionBenefits__img">
                            <img src={f3} alt=""/>
                        </div>
                        <div className="fashionBenefits__box">
                            <h3 className="fashionBenefits__h3">
                                Представление эксклюзивных моделей
                            </h3>
                            <p className="fashionBenefits__p">Fashion зона предоставит возможность участникам показать свои эксклюзивные модели, созданные специально для Halal Trade Expo. Это будет уникальная возможность продемонстрировать инновационные и творческие подходы к мусульманской моде.
                            </p>
                        </div>
                    </div>
                    <div className="fashionBenefits__row">
                        <div className="fashionBenefits__img">
                            <img src={f4} alt=""/>
                        </div>
                        <div className="fashionBenefits__box">
                            <h3 className="fashionBenefits__h3">
                                Участие в "HIT-EXPO AWARDS"
                            </h3>
                            <p className="fashionBenefits__p">Fashion зона будет проводить престижную премию "HIT-EXPO AWARDS", где будут награждены выдающиеся дизайнеры и бренды в области халяльной моды. Участники смогут представить свои работы на оценку экспертов и получить заслуженное признание.</p>
                        </div>
                    </div>
                    <div className="fashionBenefits__row">
                        <div className="fashionBenefits__img">
                            <img src={f5} alt=""/>
                        </div>
                        <div className="fashionBenefits__box">
                            <h3 className="fashionBenefits__h3">Полнооборудованная гримерка</h3>
                            <p className="fashionBenefits__p">Для участников Fashion зоны будет предоставлена профессиональная гримерка, где они смогут подготовить моделей к показу мод. Это поможет создать идеальный образ и подчеркнуть красоту и элегантность представленных моделей.</p>
                        </div>
                    </div>
                    <div className="fashionBenefits__row">
                        <div className="fashionBenefits__img">
                            <img src={f6} alt=""/>
                        </div>
                        <div className="fashionBenefits__box">
                            <h3 className="fashionBenefits__h3">
                                Профессиональная фотосессия
                            </h3>
                            <p className="fashionBenefits__p">Участники Fashion зоны смогут воспользоваться услугами профессиональных фотографов для создания высококачественных фотографий своих моделей. Это поможет сохранить воспоминания о прекрасных работах и использовать фотографии для дальнейшего продвижения бренда.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default FashionBenefits;