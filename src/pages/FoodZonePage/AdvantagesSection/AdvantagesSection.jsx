import React from 'react';
import "./AdvantagesSection.sass"
import img1 from "./img/img1.svg"
import img2 from "./img/img2.svg"
import img3 from "./img/img3.svg"
import img4 from "./img/img4.svg"
import img5 from "./img/img5.svg"
import img6 from "./img/img6.svg"

const AdvantagesSection = () => {
    return (
        <section className={'advantages'}>
            <div className="container advantages__container">
                <h2 className="advantages__h2">Преимущества</h2>
                <div className="advantages__wrapper">

                    <div className="advantages__card">
                        <div className="advantages__img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="advantages__txt">
                            <h3 className="advantages__h3">Полные условия для приготовления</h3>
                            <p className="advantages__p">Участники будут обеспечены всем необходимым оборудованием и условиями для приготовления и представления своих блюд. Это включает кухонное оборудование, столовую посуду, столы и стулья для обслуживания гостей.</p>
                        </div>

                    </div>
                    <div className="advantages__card">
                        <div className="advantages__img">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="advantages__txt">
                            <h3 className="advantages__h3">Участие в "HIT EXPO AWARDS"</h3>
                            <p className="advantages__p">Участники Food зоны имеют возможность участвовать в престижной премии "HIT EXPO AWARDS", которая признает и отмечает выдающиеся достижения в области халяльной кулинарии. Это дает участникам шанс получить признание и продвижение своих продуктов.</p>
                        </div>

                    </div>
                    <div className="advantages__card">
                        <div className="advantages__img">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="advantages__txt">
                            <h3 className="advantages__h3">Презентация авторских блюд</h3>
                            <p className="advantages__p">Участники могут представить свои авторские блюда и продукты, демонстрируя свой уникальный стиль и вкус. Это создает возможности для привлечения внимания и презентации своего бренда.</p>
                        </div>

                    </div>
                    <div className="advantages__card">
                        <div className="advantages__img">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="advantages__txt">
                            <h3 className="advantages__h3">Дегустация блюд</h3>
                            <p className="advantages__p">Посетители Halal Trade Expo имеют возможность попробовать разнообразные блюда, представленные в Food зоне. Это создает возможности для получения обратной связи от гостей, повышения узнаваемости бренда и привлечения новых клиентов.</p>
                        </div>

                    </div>
                    <div className="advantages__card">
                        <div className="advantages__img">
                            <img src={img5} alt=""/>
                        </div>
                        <div className="advantages__txt">
                            <h3 className="advantages__h3">Экспертное мнение в области HoReCa</h3>
                            <p className="advantages__p">В рамках Food зоны будут присутствовать эксперты и представители индустрии HoReCa (гостинично-ресторанного бизнеса), которые могут оценить представленные блюда, дать рекомендации и поделиться своим профессиональным мнением. Это ценный опыт для участников и может способствовать улучшению качества и востребованности их продуктов.</p>
                        </div>

                    </div>
                    <div className="advantages__card">
                        <div className="advantages__img">
                            <img src={img6} alt=""/>
                        </div>
                        <div className="advantages__txt">
                            <h3 className="advantages__h3">Возможность получения сертификации от Центра Халяль SFDA</h3>
                            <p className="advantages__p"> Участники могут претендовать на получение сертификата от Центра Халяль SFDA (Saudi Food and Drug Authority), который подтверждает соответствие представленных продуктов халяльным стандартам и повышает доверие со стороны мусульманских потребителей.</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default AdvantagesSection;