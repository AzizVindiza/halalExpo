import React, {useContext, useEffect, useRef, useState} from 'react';
import "./counterSection.sass"
import {CustomContext} from "../../../../Context";
import {useTranslation} from "react-i18next";
const CounterSection = () => {
    const {t} = useTranslation()

    const [timerDays,setTimerDays] = useState("00")
    const [timerHours,setTimerHours] = useState("00")
    const [timerMinutes,setTimerMinutes] = useState("00")
    const [timerSeconds,setTimerSeconds] = useState("00")

    let interval = useRef()

    const startDate = () => {
        const countTimeDate = new Date("october 10, 2023 08:00:00").getTime()

        interval =  setInterval(() => {
            const now = new Date().getTime()
            const  distance = countTimeDate - now
            const  days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const  hours = Math.floor(distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const  minutes = Math.floor(distance %  (1000 * 60 * 60) / (1000 * 60));
            const  seconds = Math.floor(distance %  (1000 * 60) / 1000);

            if (distance < 0){
                clearInterval(interval.current)
                
            }else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        },1000)
    }

    useEffect(() => {
        startDate();
        return () => {
            clearInterval(interval.current)
        }
    })
    return (
        <section className={'counterSection'}>
            <h2 className={'counterSection__h2'}>{t("firstSection.counter")}</h2>
            <div className="counterSection__wrapper">
                <div className="counterSection__num">
                    <p className="counterSection__time">{timerDays < 10 ? "0" + timerDays : timerDays}</p>
                    <p className="counterSection__txt">{t("firstSection.days")}</p>
                </div>
                <div className="counterSection__dock">:</div>

                <div className="counterSection__num">
                    <p className="counterSection__time">{timerHours < 10 ? "0" + timerHours : timerHours}</p>
                    <p className="counterSection__txt">{t("firstSection.hours")}</p>
                </div>
                <div className="counterSection__dock">:</div>
                <div className="counterSection__num">
                    <p className="counterSection__time">{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</p>
                    <p className="counterSection__txt">{t("firstSection.minutes")}</p>
                </div>
                <div className="counterSection__dock">:</div>
                <div className="counterSection__num">
                    <p className="counterSection__time">{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</p>
                    <p className="counterSection__txt">{t("firstSection.second")}</p>
                </div>
            </div>
            <h3 className="counterSection__h3">{t("firstSection.time")}</h3>
        </section>
    );
};

export default CounterSection;