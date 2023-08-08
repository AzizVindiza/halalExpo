import React from 'react';
import "./governmentProfile.sass"
import {useSelector} from "react-redux";


const GovernmentProfile = () => {
    const {user} = useSelector((store) => store.user)


    return (
        <section className={"governmentProfile"}>
            <div className="governmentProfile__container">
                <div className="governmentProfile__wrapper">
                    <div className="governmentProfile__img">
                        <img src="" alt=""/>
                    </div>
                    <h2 className="governmentProfile__h2">
                        {user.full_name}
                    </h2>
                    <span className="governmentProfile__span">
                        (Представитель государственных органов)
                    </span>
                    <table className="governmentProfile__table">


                        <tr className="governmentProfile__tr">
                            <td className="governmentProfile__td">ФИО</td>
                            <td className="governmentProfile__td">{user.full_name}</td>
                        </tr>
                        <tr className="governmentProfile__tr">
                            <td className="governmentProfile__td">Организация</td>
                            <td className="governmentProfile__td">{user.oganization}</td>
                        </tr>
                        <tr className="governmentProfile__tr">
                            <td className="governmentProfile__td">Отделение</td>
                            <td className="governmentProfile__td">{user.branch}</td>
                        </tr>
                        <tr className="governmentProfile__tr">
                            <td className="governmentProfile__td">Должность</td>
                            <td className="governmentProfile__td">{user.position}</td>
                        </tr>
                        <tr className="governmentProfile__tr">
                            <td className="governmentProfile__td">Email</td>
                            <td className="governmentProfile__td">{user.email}</td>
                        </tr>
                        <tr className="governmentProfile__tr">
                            <td className="governmentProfile__td">Телефон</td>
                            <td className="governmentProfile__td">{user.phone}</td>
                        </tr>





                    </table>
                </div>
            </div>

        </section>
    );
};

export default GovernmentProfile;