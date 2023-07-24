import React from 'react';
import {Link} from "react-router-dom"
import "./b2b.sass"
import B2BCard from "./B2bCard/B2bCard";

const B2B = () => {
    return (
        <div className={"B2b"}>
            <div className="B2b__container">
                <div className="B2b__wrapper">
                    <h2 className="B2b__h2">Записи B2B встреч</h2>
                    <div className="B2b__links">
                        <Link className={"B2b__link"} to={""}>Назначенные встречи</Link>
                        <Link className={"B2b__link"} to={""}>Входящие</Link>
                        <Link className={"B2b__link"} to={""}>Отправленные</Link>
                    </div>
                    <div className="B2b__box">
                        <B2BCard/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default B2B;