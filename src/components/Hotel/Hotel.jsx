import React from 'react';
import "./hotel.sass"

import img1 from "./HotelCard/img1.png"
import img2 from "./HotelCard/img2.png"


import HotelCard from "./HotelCard/HotelCard";
import {Route} from "react-router-dom";
import DearSection from "./DearSection/DearSection";
const Hotel = () => {
    return (
        <div className={'hotel'}>
            <div className="hotel__container container ">
                <DearSection/>
                <h2 className="hotel__h2">ГОСТИНИЦЫ</h2>
                <div className="hotel__wrapper">
                    <HotelCard item={{a2:"https://goo.gl/maps/Lk4yEgw72Emc2RGC8",a:"https://silence-hotel-ik.com/",img:img1,h3:"Отель “Silence”",li:["Мы находимся в старом советском пансионате,вокруг дикая местность и уединение...\n","Концепция отеля Silence \"Тишина\"\n","Для тех кто хочет сбежать от шума и суеты !\n","Своего рода Digital detox!\n","Для тех кто устал на работе 24/7"]}}/>
                    <HotelCard item={{a2:"https://goo.gl/maps/y1h9i7FisMfiWWkY8",a:"https://sites.google.com/view/hotel-zeto/",img:img2,h3:"Пансионат “Зето”",li:"Новый элитный туристический комплекс. Оригинальный дизайн, чистый, ухоженный пляж, деревянные беседки перед пляжем.Территория полностью ограждена и находится под видеонаблюдением и надежной охранной системой. Есть паркинг, два бассейна (детский и взрослый), два летних кафе, ресторан на 150 человек, прекрасная парко-пляжная зона, 4 конференц-зала, SPA-салон с теплым бассейном, балконы с видом на озеро и горный ландшафт Кунгей и Терскей Ала-Тау. Коттеджи с индивидуальной парковкой."}}/>

                </div>

            </div>

        </div>
    );
};

export default Hotel;