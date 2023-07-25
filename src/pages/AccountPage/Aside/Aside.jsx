import React from 'react';
import Tab from "./Tab/Tab";
const props = [
    {
        title : 'Профиль',
        svg :"first.svg",
        path : 'profile'
    },
    {
        title: "Управление участием",
        svg: "second.svg",
        path: "reserve",
    },
    {
        title: 'Забронировать билет',
        svg: "pen.svg",
        path : 'stand'
    },
    {
        title: 'Мой билет',
        svg: "third.svg",
        path : 'tickets'
    },
    {
        title: 'Документы',
        svg: "document.svg",
        path : 'document'
    },
    {
        title: 'B2B встречи',
        svg: "fifth.svg",
        path : 'meet'
    },
    {
        title: 'Чат',
        svg: "sixth.svg",
        path : 'chat'
    },
    {
        title: 'Настройки',
        svg: "Vector.svg",
        path : 'sittings'
    }
]

const Aside = () => {

    return (
        <div className="aside">
            <Tab item={props}/>
        </div>
    );
};

export default Aside;