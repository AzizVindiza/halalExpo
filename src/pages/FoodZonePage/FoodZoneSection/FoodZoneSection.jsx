import React from 'react';
import "./FoodZoneSection.sass"
import food from "./food.svg"
import zones from "./zones.png"



const FoodZoneSection = () => {
    return (
        <section className={'foodZone'}>
            <div className="container foodZone__container">
                <div className="foodZone__wrapper">
                    <h2 className="foodZone__h2">FOOD ZONE</h2>
                    <div className="foodZone__row">
                        <div className="foodZone__img">
                            <img src={zones} alt=""/>
                        </div>
                        <div className="foodZone__text">
                            <h3 className="foodZone__h3">
                                *Участникам предоставляется только площадь для установки стенда
                            </h3>
                            <h3 className="foodZone__h3">**Продукты, столовые приборы, кухонный инвентарь
                                предоставляется участником</h3>
                            <h3 className="foodZone__h3">***Вся продукция оплачивается гостями и посетителями выставки по прайсу, установленному участником</h3>
                            <p className="foodZone__p">Отправляйтесь в эту зону, когда захотите насладиться богатством халяльных блюд. Позвольте себе познакомиться с различными вкусами и кулинарными традициями, встретиться с представителями пищевой промышленности и сферы гостеприимства. Вы не останетесь равнодушны!</p>

                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default FoodZoneSection;