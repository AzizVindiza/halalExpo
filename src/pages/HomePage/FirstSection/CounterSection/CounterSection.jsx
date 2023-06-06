import React, {useEffect, useRef, useState} from 'react';
import "./counterSection.sass"
const CounterSection = () => {
    const [timerDays,setTimerDays] = useState("00")
    const [timerHours,setTimerHours] = useState("00")
    const [timerMinutes,setTimerMinutes] = useState("00")
    const [timerSeconds,setTimerSeconds] = useState("00")

    let interval = useRef()

    const startDate = () => {
        const countTimeDate = new Date("july 29, 2023 08:00:00").getTime()

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
            <h2 className={'counterSection__h2'}>До начало HIT EXPO</h2>
            <div className="counterSection__wrapper">
                <div className="counterSection__num">
                    <p className="counterSection__time">{timerDays < 10 ? "0" + timerDays : timerDays}</p>
                    <p className="counterSection__txt">дней</p>
                </div>
                <div className="counterSection__dock">:</div>

                <div className="counterSection__num">
                    <p className="counterSection__time">{timerHours < 10 ? "0" + timerHours : timerHours}</p>
                    <p className="counterSection__txt">часов</p>
                </div>
                <div className="counterSection__dock">:</div>
                <div className="counterSection__num">
                    <p className="counterSection__time">{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</p>
                    <p className="counterSection__txt">минут</p>
                </div>
                <div className="counterSection__dock">:</div>
                <div className="counterSection__num">
                    <p className="counterSection__time">{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</p>
                    <p className="counterSection__txt">секунд</p>
                </div>
            </div>
            <h3 className="counterSection__h3">29 июля 2023</h3>
        </section>
    );
};

export default CounterSection;