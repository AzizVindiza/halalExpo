import React from 'react';
import "./FoodZoneSection.sass"
import food from "./food.svg"

const FoodZoneSection = () => {
    return (
        <section className={'foodZone'}>
            <div className="container foodZone__container">
                <div className="foodZone__wrapper">
                    <h2 className="foodZone__h2">FOOD ZONE</h2>
                    <div className="foodZone__row">
                        <div className="foodZone__img">
                            <img src={food} alt=""/>
                        </div>
                        <div className="foodZone__text">
                            <h4 className="foodZone__h4">Отправляйтесь в эту зону, когда захотите насладиться богатством халяльных блюд. Позвольте себе познакомиться с различными вкусами и кулинарными традициями, встретиться с представителями пищевой промышленности и сферы гостеприимства. Вы не останетесь равнодушны!</h4>
                            <h3 className="foodZone__h3">
                                *Участникам предоставляется только площадь для установки стенда
                                **Продукты, столовые приборы, кухонный инвентарь
                                предоставляется участником
                                ***Вся продукция оплачивается гостями и посетителями выставки по прайсу, установленному участником</h3>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default FoodZoneSection;