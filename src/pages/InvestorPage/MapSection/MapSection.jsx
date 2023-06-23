import React from 'react';
import pic from "./карта3 1.png"
import "./mapsection.sass"
const MapSection = () => {
    return (
        <section className={'mapSection'}>
            <div className="container mapSection__container">

                <div className="mapSection__block">

                    <div className="mapSection__image">

                        <h2 className="mapSection__h2">инвесторы hit expo 2023</h2>
                        <p className="mapSection__p">HIT Expo-2023 предоставляет вам возможность ознакомиться с профилями наших инвесторов, чтобы вы могли узнать об их экспертизе, бизнес-подходе и инвестиционной деятельности. Приглашенные инвесторы представляют различные отрасли и области, и их присутствие на нашем мероприятии открывает уникальные возможности для новых связей и партнерств. </p>
                        <p className="mapSection__p">Присутствие представителей инвестиционных фондов из арабских стран подчеркивает важность проведения HIT Expo-2023, так как мероприятия окажет содействие в развитии экономического сотрудничества и укреплении связей на международном уровне. Также их участие является выражением намерения исследовать новые возможности, придерживаясь исламских ценностей.</p>
                        <p className="mapSection__p">Выставка Halal Investment and Trade Expo 2023 нацелена на то, чтобы стать катализатором экономического роста и развития, создавая благоприятные условия и возможности для бизнеса и инвесторов.</p>

                        <img src={pic} alt="" className="mapSection__img"/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MapSection;