import React from 'react';
import pic from "./карта3 1.png"
import "./mapsection.sass"
import InvestorPeople from "../InvestorPeople/InvestorPeople";






const MapSection = () => {


    const arr1 = [
        {
            img: "../asserts/InvestorImg/country/uz.svg",
            text: "Узбекистан"
        },
        {
            img: "../asserts/InvestorImg/country/ru.svg",
            text: "Россия"
        },
        {
            img: "../asserts/InvestorImg/country/kg.svg",
            text: "Кыргызстан"
        },
        {
            img: "../asserts/InvestorImg/country/kz.svg",
            text: "Казахстан"
        }
    ]
    const arr2 = [
        {
            img: "../asserts/InvestorImg/country/Un.svg",
            text: "Великобритания"
        },
        {
            img: "../asserts/InvestorImg/country/turk.svg",
            text: "Турция"
        },
        {
            img: "../asserts/InvestorImg/country/kuveit.svg",
            text: "Кувейт"
        },
        {
            img: "../asserts/InvestorImg/country/saud.svg",
            text: "Королевста Саудовской Аравии "
        }
    ]
    const arr3 = [
        {
            img: "../asserts/InvestorImg/country/bahr.svg",
            text: "Бахрейн"
        },
        {
            img: "../asserts/InvestorImg/country/katar.svg",
            text: "Катар"
        },
        {
            img: "../asserts/InvestorImg/country/egipet.svg",
            text: "Египет"
        },
        {
            img: "../asserts/InvestorImg/country/Oae.svg",
            text: "ОАЭ"
        }
    ]



    return (
        <section className={'mapSection'}>
            <div className="container mapSection__container">
                <h2 className="mapSection__h2">инвесторы hit expo 2023</h2>
                <div className="mapSection__block">
                    <div className="mapSection__row">

                        {
                            arr1.map((item)=>(

                                <div className="mapSection__item">
                                    <div className="mapSection__img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <h3 className={"mapSection__h3"}>{item.text}</h3>
                                </div>
                            ))
                        }

                    </div>
                    <div className="mapSection__row2">
                        <div className="mapSection__column">

                            {
                                arr2.map((item)=>(
                                    <div className="mapSection__item">
                                        <div className="mapSection__img">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <h3 className={"mapSection__h3"}>{item.text}</h3>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="mapSection__column  ">
                            {
                                arr3.map((item)=>(
                                    <div className="mapSection__item">
                                        <div className="mapSection__img">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <h3 className={"mapSection__h3"}>{item.text}</h3>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <img src={pic} alt="" className="mapSection__img2"/>


                </div>
                <InvestorPeople/>


                <div className={"mapSection__box"}>
                    <p className="mapSection__p">Выставка <span className={"mapSection__span"}> Halal Investment and Trade Expo 2023</span> соберет представителей инвестиционных фондов из стран арабского мира. Специалисты, топ-менеджеры и главы крупнейших компаний мира прибудут на мероприятие для поиска и отбора перспективных проектов из различных областей деятельности.</p>
                    <p className="mapSection__p">Присутствие представителей инвестиционных фондов из арабских стран подчеркивает важность проведения <span className={"mapSection__span"}>HIT Expo-2023</span>, так как мероприятия окажет содействие в развитии экономического сотрудничества и укреплении связей на международном уровне. Также их участие является выражением намерения исследовать новые возможности, придерживаясь исламских ценностей. </p>
                    <p className="mapSection__p">Выставка  <span className={"mapSection__span"}> Halal Investment andTrade Expo 2023</span> нацелена на то, чтобы стать катализатором экономического роста и развития, создавая благоприятные условия и возможности для бизнеса и инвесторов.</p>
                </div>

            </div>
        </section>
    );
};

export default MapSection;