import React from 'react';
import './StandCardSection.sass'
import StCardBox from "./StCardBox/StCardBox";


const StandCardSection = () => {
    return (
        <section className='stCard'>
            <div className="stCard__container container">
                <StCardBox card={{name: "ПАКЕТ: STANDARD",meter:"2 кв.м",price: "$2850",li:["Стенды по периметру","Стойка для ресепшн","Полки","Логотип компании","Розетки"]}}/>
                <StCardBox card={{name: "STANDARD+",meter:"2 кв.м",price : "$2850" ,discount: "$3258",li:["Стенды по периметру","Стойка для ресепшн","Полки","Логотип компании","Розетки"] }}/>
                <StCardBox card={{name: "SILVER",meter:"6 кв.м",price : "$3135",li:["Стол","Полки","Стулья","Розетки","Стенды по периметру","Иесто для логотипа"]}}/>
                <StCardBox card={{name: "SILVER+",meter:"6 кв.м", pocket: "Пакет: Silver +",price : "$3135",discount: "$4583",li:["Стол","Полки","Стулья","Розетки","Стенды по периметру","Иесто для логотипа"]}}/>
                <StCardBox card={{name: "Gold",meter:"9 кв.м", pocket: "Пакет: Gold",price : "$4275",li:["Полки","Баннер","Кресла","Диван","Стол","Розетки","Стойка ресепшн","Мусоорная корзина","Стенды по периметру"]}}/>
                <StCardBox card={{name: "Gold+",meter:"9 кв.м", pocket: "Пакет: Gold +",price : "$4275",discount: "$4886",li:["Полки","Баннер","Кресла","Диван","Стол","Розетки","Стойка ресепшн","Мусоорная корзина","Стенды по периметру"]}}/>
                <StCardBox card={{name: "PLATINUM",meter:"12 кв.м", pocket: "Пакет: Platinum",price : "$5130",li:["Полки","Баннер","Кресла","Диван","Стол","Розетки","Стойка ресепшн","Мусоорная корзина","Стенды по периметру","Логотип компании","Место рекламы"]}}/>
                <StCardBox card={{name: "PLATINUM+",meter:"12 кв.м", pocket: "Пакет: Platinum +",price : "$5130",discount: "$5863",li:["Полки","Баннер","Кресла","Диван","Стол","Розетки","Стойка ресепшн","Мусоорная корзина","Стенды по периметру","Логотип компании","Место рекламы"]}}/>
                {/*<StCardBox card={{name: "GENERAl",meter:"50 кв.м", pocket: "Пакет: General",price : "",li:["Полки","Баннер","Кресла","Диван","Стол","Розетки","Стойка ресепшн","Мусоорная корзина","Стенды по периметру","Логотип компании","Место рекламы"]}}/>*/}
            </div>
        </section>
    );
};

export default StandCardSection;