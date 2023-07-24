import React from 'react';
import img1 from "./img1.svg"
import "./FoodCard.sass"
import img2 from "./img2.svg"
import Btn from "../../../components/Btn/Btn";

const FoodCard = () => {
    return (
        <section className={'foodCard'}>
            <div className="container foodCard__container">
                <div className="foodCard__wrapper">

                    <div className="foodCard__block">

                        <h2 className="foodCard__h2">Количество мест: 5 ресторанов/кафе</h2>
                        <div className="foodCard__card">
                            <div className="foodCard__img">
                                <img src={img1} alt=""/>
                            </div>
                            <span className="foodCard__span">
                                В Food zone предоставляется ограниченное количество мест для 5 ресторанов/кафе. Будьте среди первых, кто забронирует место, чтобы представить свои уникальные халяльные блюда и привлечь внимание гостей выставки
                            </span>
                        </div>
                        <div className="foodCard__text">
                            <h3 className="foodCard__h3">Площадь для одного участника: 5м*5м</h3>
                            <p className="foodCard__p">$550</p>
                        </div>


                    </div>
                    <div className="foodCard__block">

                        <h2 className="foodCard__h2">Количество мест: 10 павильонов формата Take&Go</h2>
                        <div className="foodCard__card">
                            <div className="foodCard__img img2">
                                <img src={img2} alt=""/>
                            </div>
                            <span className="foodCard__span">В Food zone доступно 10 павильонов формата Take&Go для участников. Забронируйте место сейчас и позвольте гостям выставки насладиться вашими кулинарными изысками в удобном формате быстрого питания.</span>
                        </div>
                        <div className="foodCard__price">
                            <h3 className="foodCard__h3">Площадь одного павильона: 2м*2м</h3>
                            <p className="foodCard__p">$200</p>
                        </div>

                    </div>

                </div>
                <div className="foodCard__txt">Стоимость участия с учетом раннего бронивания актуальна до 20 июля </div>
                <div className="foodCard__btn">
                    <Btn  type={"submit"} text={'Перейти к пакетам'}/>
                </div>
            </div>

        </section>
    );
};

export default FoodCard;